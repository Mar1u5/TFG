import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { GlobalService } from '../../services/global.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // 
  constructor( private authService: GlobalService,
               private afsAuth: AngularFireAuth) { }

  public isAuthenticated: boolean = false;

  ngOnInit() {
    // Cuando carga el componeto pregunto si esta logueado
    this.getUser();
  }

  getUser(){

    this.authService.isAuth().subscribe ( auth =>{
      if ( auth ) {
        console.log('user logueado ');
        this.isAuthenticated = true;
      } else {
        console.log('user NO logueado ');
        this.isAuthenticated = false;
      }
    } )
  }

  logout(){
    this.afsAuth.auth.signOut();
  }

}
