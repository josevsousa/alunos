import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AlunosService } from '../alunos.service';
import { iAluno } from '../aluno';
import { MatInputModule } from '@angular/material/input';

import { FormAlunoComponent } from '../form-aluno/form-aluno.component';



@Component({
  selector: 'app-teste',
  standalone: true,
  imports: [
    CommonModule, 
    MatButtonModule, 
    MatCardModule, 
    RouterLink,
    MatInputModule,
    FormAlunoComponent
  ],
  templateUrl: './exibirAluno.component.html',
  styleUrls: ['./exibirAluno.component.css']
})
export class ExibirAlunoComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  alunosService: AlunosService = inject(AlunosService);
  aluno: iAluno | undefined;



  constructor(){
    // console.log(this.route.snapshot.params['id'])
    
    this.aluno = this.alunosService.getAlunosId(parseInt(this.route.snapshot.params['id']));

    console.log(this.aluno);
  }




}
