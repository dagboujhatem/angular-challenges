import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  // Add new product (used in add-product component)
  addProduct(productData): Observable<any>
  {
    return this.http.post('http://localhost:3000/products', productData);
  }

  // Get all products (used in list-products component)
  getAllProducts(): Observable<any>
  {
    return this.http.get('http://localhost:3000/products');
  }

  // Get product by ID (used in update-product component)
  getOneProductById(id): Observable<any>
  {
    return this.http.get('http://localhost:3000/products/'+ id);
  }

  // Update product by index (used in update-product component)
  updateProductById(id, updatedProductData): Observable<any>
  {
    return this.http.put('http://localhost:3000/products/'+ id, updatedProductData);
  }

  // Delete product by index (used in list-products component)
  deleteProductById(id): Observable<any>
  {
    return this.http.delete('http://localhost:3000/products/'+ id);
  }

}
