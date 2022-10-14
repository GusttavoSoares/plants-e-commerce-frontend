import { Component, OnInit } from '@angular/core';
import {ProductFormComponent} from "./products/product-form/product-form.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  openProductForm() {
    const dialogRef = this.dialog.open(ProductFormComponent);

  }

  ngOnInit(): void {
  }

}
