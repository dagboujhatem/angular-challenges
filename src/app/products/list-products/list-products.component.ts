import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  products : any;
  searchText : any;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
  }

  deleteProduct(i)
  {
    // delete products
    this.productService.deleteProductByIndex(i);
    // refresh list of products (after delete)
    this.products = this.productService.getAllProducts();
  }

}
