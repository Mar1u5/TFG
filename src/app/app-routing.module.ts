import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsVideoComponent } from './components/admin/details-video/details-video.component';
import { ListVideosComponent } from './components/admin/list-videos/list-videos.component';
import { LoginComponent } from './components/users/login/login.component';
import { RegisterComponent } from './components/users/register/register.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { Page404Component } from './components/page404/page404.component';
import { VideoComponent } from './components/video/video.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { AddVideoComponent } from './components/admin/add-video/add-video.component';



const routes: Routes = [
  // Recibe un arrary como paramento y recibe un objeto donde estan nuestras rutas.
  // Indicamos con que rutas se desea trabajar.
  { path: '', component: RegisterComponent },
  { path: 'video/:videoSel', component: VideoComponent, canActivate: [AuthGuard] },     // TODO: Solo usuarios autenticados
  // { path: 'videos/:id', component: DetailsVideoComponent },     // TODO: Solo usuarios autenticados y administradores
  { path: 'videos/:id', component: DetailsVideoComponent, canActivate: [AuthGuard] },
  { path: 'admin/list-videos', component: ListVideosComponent, canActivate: [AuthGuard] },  // TODO: Solo usuarios autenticados
  { path: 'user/login', component: LoginComponent }, 
  { path: 'addVideo', component: AddVideoComponent }, 
  { path: 'user/register', component: RegisterComponent }, 
  { path: 'user/profile', component: ProfileComponent, canActivate: [AuthGuard] },  // TODO: Solo usuarios autenticados
  { path: '**', component: Page404Component }



  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
