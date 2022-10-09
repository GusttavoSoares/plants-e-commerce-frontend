import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductFormComponent } from "./products/product-form/product-form.component";


const routes: Routes = [
  {
    path: '',
    component: ProductFormComponent, // TODO - change after
    children: [
      { path: 'new', component: ProductFormComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
