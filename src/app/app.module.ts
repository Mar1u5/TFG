// Modulos de Angular

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


// Modulos de Firebase

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';

// Service 

import { GlobalService } from './services/global.service';


// Variables de entorno

import { environment } from '../environments/environment';

// Componentes de la aplicacion

import { AppComponent } from './app.component';
import { VideoComponent } from './components/video/video.component';
import { ModalComponent } from './components/modal/modal.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Page404Component } from './components/page404/page404.component';
import { LoginComponent } from './components/users/login/login.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { RegisterComponent } from './components/users/register/register.component';
import { ListVideosComponent } from './components/admin/list-videos/list-videos.component';
import { DetailsVideoComponent } from './components/admin/details-video/details-video.component';
import { FooterComponent } from '../app/components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { VideoYoutube } from './pipes/video-youtube.pipe';
import { AddVideoComponent } from './components/admin/add-video/add-video.component';

@NgModule({
  declarations: [
    AppComponent,
    ListVideosComponent,
    DetailsVideoComponent,
    ModalComponent,
    NavbarComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    Page404Component,
    VideoComponent,
    FooterComponent,
    HomeComponent,
    VideoYoutube,
    AddVideoComponent
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    HttpClientModule
    
  ],
  providers: [ 
    AngularFireAuth,
    AngularFirestore,
    GlobalService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
