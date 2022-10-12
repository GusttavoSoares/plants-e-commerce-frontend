import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { ProductType } from "../../../../core/models/product-type.model";
import { ProductService } from "../../../../core/services/product.service";
import { first } from "rxjs";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  form!: FormGroup
  productType = ProductType;
  enumKeys: any = [];
  submitted: boolean = false;

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder,
  ) {
    this.enumKeys = Object.keys(this.productType)
  }

  ngOnInit(): void {
    this.form = this.buildForm();
  }

  buildForm(): FormGroup {
  return this.formBuilder.group({
    name: [''],
    description: [''],
    quantity: [''],
    price: [''],
    type: ['']
  });
}

  onSubmit() {
  this.submitted = true;

  if(this.form.invalid) {
    return;
  }
  console.log(this.form.value);
  this.createProduct();
}

createProduct() {
  this.productService.postProduct(this.form.value)
    .pipe(first())
    .subscribe({

    })
}
}
