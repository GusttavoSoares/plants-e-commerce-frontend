import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductFormComponent } from './products/product-form/product-form.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import {ReactiveFormsModule} from "@angular/forms";


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
        MatButtonModule,
        MatInputModule,
        MatGridListModule,
        ReactiveFormsModule
    ]
})
export class ProductsModule { }
