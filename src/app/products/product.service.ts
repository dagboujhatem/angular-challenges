import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  // Add new product (used in add-product component)
  addProduct(productData)
  {
    let products = JSON.parse(localStorage.getItem('products') ||  '[]');
    products.push(productData);
    localStorage.setItem('products', JSON.stringify(products));

  }

  // Get all products (used in list-products component)
  getAllProducts()
  {
    let products = JSON.parse(localStorage.getItem('products') ||  '[]');
    return products;
  }

  // Get product by index (used in update-product component)
  getProductByIndex(index)
  {
    let products = JSON.parse(localStorage.getItem('products') ||  '[]');
    return products[index];
  }

  // Update product by index (used in update-product component)
  updateProductDataByIndex(updatedProductData, index)
  {
    let products = JSON.parse(localStorage.getItem('products') ||  '[]');
    products.splice(index, 1, updatedProductData);
    localStorage.setItem('products', JSON.stringify(products));
  }

  // Delete product by index (used in list-products component)
  deleteProductByIndex(index)
  {
    let products = JSON.parse(localStorage.getItem('products') ||  '[]');
    products.splice(index, 1);
    localStorage.setItem('products', JSON.stringify(products));
  }

}
