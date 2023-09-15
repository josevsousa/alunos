import { Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { ExibirAlunoComponent } from "./exibir-aluno/exibirAluno.component";
// import { TelaLoginComponent } from "./tela-login/tela-login.component";

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home Component'
    },
    {
        path: 'exibirAluno/:id',
        component: ExibirAlunoComponent,
        title: 'exibir aluno Component'
    },
    {
        path: 'telaLogin',
        // component: TelaLoginComponent,
        loadComponent: () => import('./tela-login/tela-login.component'),
        title: 'tela login'
    },
    {
        path: '**',
        component: HomeComponent,
        title: 'Home Component'
    }
]