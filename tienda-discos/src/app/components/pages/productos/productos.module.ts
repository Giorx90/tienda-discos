import { NgModule, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosRoutingModule } from './productos-routing.module';
import { PipesModule } from './../../../pipes/pipes.module';
import { FormsModule } from '@angular/forms';

import { ProductosComponent } from './productos.component';


@NgModule({
  declarations: [
    ProductosComponent
  ],

  imports: [
    CommonModule,
    ProductosRoutingModule, 
    PipesModule, 
    FormsModule,
  ]
})
export class ProductosModule { }
