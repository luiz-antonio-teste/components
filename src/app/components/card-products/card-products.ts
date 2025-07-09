import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-card-products',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './card-products.html',
  styleUrl: './card-products.css'
})
export class CardProducts {
  productName: string = 'Product Name';
  productPrice: string = '$99.99';
  productImage: string = 'assets/carvao.webp';
  productId: number = 1;
  buttonName:string = 'Add to Cart';
}
