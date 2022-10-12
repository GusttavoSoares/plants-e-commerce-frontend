import { ProductType } from "./product-type.model";

export interface ProductDto {
  id: string;
  name: string;
  description: string;
  quantity: number;
  price:  number;
  type: ProductType;
}

export class ProductCreateDto {
  name: string | undefined;
  description: string | undefined;
  quantity: number | undefined;
  price: number | undefined;
  type: ProductType | undefined;

  constructor(name: string, description: string, quantity: number, price: number, type: ProductType) {
  }
}
