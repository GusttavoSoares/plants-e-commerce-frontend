import { ProductType } from "./product-type.model";

export interface ProductDto {
  id: string;
  name: string;
  description: string;
  quantity: number;
  price:  number;
  type: ProductType;
  image: String;
}

export class ProductCreateDto {
  name: string | undefined;
  description: string | undefined;
  quantity: number | undefined;
  price: number | undefined;
  type: ProductType | undefined;
  image?: String

  constructor(name: string, description: string, quantity: number, price: number, type: ProductType, image: String) {
    this.name = name;
    this.description = description;
    this.quantity = quantity;
    this.price = price;
    this.type = type;
    this.image = image;
  }
}
