import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from "@angular/forms";
import { ProductType } from "../../../../core/models/product-type.model";
import { ProductService } from "../../../../core/services/product.service";
import { first } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";
import {CustomValidations} from "../../../../core/validators/custom-validations";
import {Violation} from "../../../../core/models/problem-detail";

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
      name: ['', [CustomValidations.notBlank, Validators.minLength(5), Validators.maxLength(60)]],
      description: ['', [CustomValidations.notBlank, Validators.minLength(30), Validators.maxLength(5000)]],
      quantity: ['', [Validators.required, Validators.min(1), Validators.max(9999)]],
      price: ['', [Validators.required, Validators.min(0.1), Validators.max(9999)]],
      type: ['', [Validators.required]]
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
      .subscribe({
        error: error => this.handleError(error)
      });
  }

  field(path: string) {
    return this.form.get(path)!;
  }

  fieldErrors(path: string) {
    return this.field(path).errors;
  }

  handleError(err: any) {
    if (err instanceof HttpErrorResponse) {
      if (err.status === 400) {
        const violations: Violation[] = err.error;
        violations.forEach( violation => {
          const formControl = this.form.get(violation.name);
          if (formControl) {
            formControl.setErrors({ serverError: violation.message })
          }
        })
      }

      if(err.status === 409) {
        const productName = this.field('name');
        productName.setErrors({ serverError: `Product already exists with the name ${ productName.value}`})
      }
    }
  }
}
