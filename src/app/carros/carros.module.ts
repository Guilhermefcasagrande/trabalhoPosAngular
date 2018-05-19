import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarrosRoutingModule } from './carros-routing.module';
import { CrudComponent } from './crud/crud.component';
import { ListaComponent } from './lista/lista.component';
import { EditaComponent } from './edita/edita.component';

@NgModule({
  imports: [
    CommonModule,
    CarrosRoutingModule
  ],
  declarations: [CrudComponent, ListaComponent, EditaComponent]
})
export class CarrosModule { }
