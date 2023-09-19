import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { map } from 'rxjs';

@Component({
  selector: 'app-tela-login',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export default class TelaLoginComponent {

  user$ = this.angularAuth.authState.pipe(
    map(user => ({user}))
  )

  loginForm = new FormGroup({
    usuario: new FormControl(''),
    senha: new FormControl('')
  })

  constructor( private angularAuth: AngularFireAuth ){}



  ddd() {
    console.log(this.loginForm.value)
  }


  loginGoogle(){
    this.angularAuth.signInWithPopup(new GoogleAuthProvider())
      .then(()=>{
        console.log(this.user$)
      })
      .catch((error)=> console.log(error))
  }

  desconectarGoogle(){
    this.angularAuth.signOut();
  } 



}
