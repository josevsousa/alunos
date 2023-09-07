import { Injectable } from '@angular/core';

import { iAluno } from './aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  alunosList: iAluno[] = [
    {
      id: 0,
      nome: "jose",
      photo: "./assets/images_alunos/a.png",
      idade: 44,
      cpf: 4444
    },{
      id: 1,
      nome: "Xyxa",
      photo: "./assets/images_alunos/b.png",
      idade: 20,
      cpf: 55555
    },{
      id: 2,
      nome: "Aldeir",
      photo: "./assets/images_alunos/c.png",
      idade: 39,
      cpf: 343434
    },{
      id: 3,
      nome: "Bela",
      photo: "./assets/images_alunos/c.png",
      idade: 12,
      cpf: 11111
    }
  ];  

  getAlunos(): iAluno[]{
    return this.alunosList;
  }

  getAlunosId(id: number){
    return this.alunosList.find(aluno => aluno.id === id);
  }

  formAluno(nome: string, cpf: string){
    console.log(`nomedddd: ${nome} cpf: ${cpf}`)
  }

  exibirCarro() {
    return "Gol"
  }

}
