import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


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

  loginForm = new FormGroup({
    usuario: new FormControl(''),
    senha: new FormControl('')
  })

  ddd() {
    console.log(this.loginForm.value)
  }


}
