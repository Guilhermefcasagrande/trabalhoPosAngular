import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from './carros/lista/lista.component';

const routes: Routes = [

  { path: 'carros', component: ListaComponent },
  { path: '',
    redirectTo: 'carros',
    pathMatch: 'full'
  },
  { path: '**', component: ListaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
