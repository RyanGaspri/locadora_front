import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadAllComponent } from './components/read-all/read-all.component';
import { InativosComponent } from './components/inativos/inativos.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { AtualizarComponent } from './components/atualizar/atualizar.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent  // Tela de login como a rota inicial
  },
  {
    path: 'inativos',
    component: InativosComponent
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  },
  {
    path: 'atualizar/:ra',
    component: AtualizarComponent
  },
  {
    path: 'read-all',  // Defina a rota para a tela de "Ler Todos"
    component: ReadAllComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
