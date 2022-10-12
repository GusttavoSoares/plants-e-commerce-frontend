import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from "@angular/forms";
import { ProductType } from "../../../../core/models/product-type.model";
import { ProductService } from "../../../../core/services/product.service";
import { first } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";

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
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(60)]],
      description: [''],
      quantity: [''],
      price: [''],
      type: ['']
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    this.createProduct();
  }

  createProduct() {
    this.productService.postProduct(this.form.value)
      .pipe(first())
      .subscribe({})
  }

  field(path: string) {
    return this.form.get(path)!;
  }

  fieldErrors(path: string) {
    return this.field(path).errors;
  }

  // TODO - handle error
}
