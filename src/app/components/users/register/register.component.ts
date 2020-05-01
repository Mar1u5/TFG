import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { GlobalService } from '../../../services/global.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( private authService: GlobalService,
               private router: Router ) { }

  @ViewChild('nameUser') inputNameUser: ElementRef;

   
  public email: string = '';
  public password: string= '';
  public name: string = '';

  ngOnInit() {
  }

  addName(){
    console.log('el name es : ', this.name);
    this.authService.isAuth().subscribe( user => {
      if (user) {
        console.log('user actual',user);
        
        user.updateProfile ({
          displayName : this.name
        }).then ( function () {
          console.log('Name Updated');
        }).catch ( function (error) {
          console.log('Error en actualizar nombre', error);
        });
      }
    });

  }
  addUser(){
    this.authService.registerUser(this.email, this.password)
      .then ( (res) => {
        
        this.addName();

        this.router.navigate(['admin/list-videos']);

      } ).catch (err => console.log('error es ', err.message)
      )
  }


  loginGoogle(): void {

    this.authService.loginGoogleUser().then( ( res ) => {
      console.log('respuesta user',res);

      // this.router.navigate(['admin/list-videos']);

      this.redirectTo();
    }).catch ( err => console.log('err es :',err.message) );
  }

  logout(): void {

    this.authService.logoutUser();
    // TODO Redirigir a la pagina de login
    // TODO Borrar por ejemplo local storage
  }

  redirectTo( ruta : string = 'admin/list-videos') : void {

    this.router.navigate([ruta]);
    // TODO Definir una metodo que reciba una ruta y que realice la redirecion
  }

}
