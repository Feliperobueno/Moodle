import { CursosChatguruComponent } from './paginas/cursos-chatguru/cursos-chatguru.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { PerfilComponent } from './paginas/perfil/perfil.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'home/chatguru', component: CursosChatguruComponent},
  {path: 'chatguru', component: CursosChatguruComponent},
  {path: '', component: HomeComponent} 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
