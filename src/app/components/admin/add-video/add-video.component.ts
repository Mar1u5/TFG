import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.css']
})
export class AddVideoComponent implements OnInit {

  contacto: FormGroup;
  submitted = false;
  titulo = 'Insert New Video ';

  private urlapi= ' https://www.googleapis.com/youtube/v3/videos';

  constructor( private formBuilder: FormBuilder,
               private http: HttpClient ) { }

  ngOnInit() {
    this.contacto = this.formBuilder.group({
      nya: ['', Validators.required],            
      postre: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(6)]]
  });
  }

  get f() { return this.contacto.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.contacto.invalid) {
        return;
    }

    alert('Mensaje Enviado !')
}


uploadImage(event){
  // console.log('subir', event.target.files[0]);

  const file = event.target.files[0];

  // this.http.post(this.urlapi, body).subscribe()
 
  // https://angular.io/guide/lifecycle-hooks#onchanges
  // https://victorroblesweb.es/2017/08/12/hooks-de-angular-4/


  
}

}


// var filestream;
//   var reader  = new FileReader();

//   // Gets Blob data from the video url
//   this.galleryService.getVideo(this.videoUrl)
//     .subscribe(data => {
//       reader.readAsDataURL(data);
//   });

//   reader.onloadend = function () {
//     filestream = reader.result;

//     gapi.client.youtube.videos
//       .insert({
//         part: 'snippet,status',
//         resource : {
//           snippet: {
//             title: 'Test video',
//             description: 'Testing the YouTube API',
//           },
//           status: {
//             privacyStatus: 'private'
//           }
//         },

//       }, filestream) // This is where it's supposed to be?
//       .then(response => {
//         console.log(response);
//       })
//       .catch(err => console.log(err));
//   }