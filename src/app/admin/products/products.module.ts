import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductFormComponent } from './products/product-form/product-form.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductFormComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule
  ]
})
export class ProductsModule { }
