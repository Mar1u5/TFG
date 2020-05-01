import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GlobalService } from '../../../services/global.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserInterface } from './../../../models/user';
import { VideoInterface } from '../../../models/video';



declare var $:any;


@Component({
  selector: 'app-list-videos',
  templateUrl: './list-videos.component.html',
  styleUrls: ['./list-videos.component.css']
})
export class ListVideosComponent implements OnInit {

  videos: VideoInterface[] = [];
  videoSel: any;
  public isAdmin: any = null;
  public userUid: string = null;


  constructor( public appService: GlobalService,
               private router: Router ) { 
    
    
    this.appService.getVideos()
    .subscribe( videos => this.videos = videos );
      // console.log('Los videos recibidos son : ', videos);
  }
  ngOnInit() {
    this.getUser();
  }

  getUser () {
    this.appService.isAuth().subscribe( auth => {
      // printo el user
      console.log('el auth es' , auth);
      
      if (auth) {
      this.userUid = auth.uid;
      this.appService.isUserAdmin(this.userUid)
            .subscribe(userRole => {
              this.isAdmin = Object.assign( {}, userRole.roles).hasOwnProperty('admin');
      })
    }
    })
  }

  // Guardo los videos recibidos
  moreVideos() {
    this.appService.getVideos().subscribe ( videos => this.videos.push.apply(this.videos, videos) );
  }

 

  // Funcion para ver el video
  verVideo(video:any){
    console.log('El video recibido es :', video);
     return this.videoSel = video;
  }

  // Funcion para editar el video
  editVideo(video:any){
    console.log('El video recibido es :', video);
     return this.videoSel = video;
     
  }


}
