import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionRoutingModule } from './gestion-routing.module';
import { GestionComponent } from './gestion.component';

import { ReactiveFormsModule } from '@angular/forms';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    GestionComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    GestionRoutingModule,
    ReactiveFormsModule
  ]
})
export class GestionModule { }
