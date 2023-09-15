import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

import { MatInputModule } from '@angular/material/input';

import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-form-aluno',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatButtonModule, MatInputModule],
  templateUrl: './form-aluno.component.html',
  styleUrls: ['./form-aluno.component.css']
})
export class FormAlunoComponent {
  alunoService: AlunosService = inject(AlunosService);

  appForm = new FormGroup({
    nome: new FormControl(''),
    cpf: new FormControl('')
  })

  submitForm(){
    this.alunoService.formAluno(this.appForm.value.nome ?? '', this.appForm.value.cpf ?? '');
  }
}
