import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Product } from '../Product';
import { PRODUCTS } from '../products/mock-products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product?: Product;
  private products = PRODUCTS;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const pIdFromRoute = Number(routeParams.get('productId'));

    this.product = this.products.find((p) => p.id === pIdFromRoute);
  }

}
