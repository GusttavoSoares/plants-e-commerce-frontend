import { Injectable } from '@angular/core';
import { ProductCreateDto, ProductDto } from "../models/product.model";
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';
import { HttpClient } from "@angular/common/http";
import { BaseService } from "./base.service";

@Injectable({
  providedIn: 'root'
})
export class ProductService extends BaseService{

  apiUrl = `${environment.apiUrl}/products`;

  constructor(private httpClient: HttpClient) {
    super();
  }

  postProduct(productCreateDto: ProductCreateDto): Observable<ProductDto> {
    return this.httpClient.post<ProductDto>(this.apiUrl, productCreateDto, this.httpOptions);
  }
}
