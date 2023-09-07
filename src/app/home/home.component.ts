import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { iAluno } from '../aluno';
import { AlunosService } from '../alunos.service';

import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { RouterLink} from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatDividerModule, MatListModule, MatIconModule, MatButtonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

listarAlunos: iAluno[] = [];
alunosService: AlunosService = inject(AlunosService);


// teste de uma var carro que esta no alunosService
carro: string = this.alunosService.exibirCarro();


constructor(){
  this.listarAlunos = this.alunosService.getAlunos();
}

}
