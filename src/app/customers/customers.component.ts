import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductsService } from './services/products.service';
// import { MatPaginator } from '@angular/material/paginator';
// import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit  {

  productsList: any;

  constructor(
    private productsService: ProductsService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
   this.loadProducts();
  }

  loadProducts()
  {
    this.productsService.getAllProducts().subscribe((response)=>{
      this.productsList = response;
    }, (error)=>{
        console.log(error);        
    });
  }

  deleteProduct(id)
  {
    this.productsService.deleteProductById(id).subscribe((response)=>{
      this.snackBar.open("Product deleted successfully!", "Done", {duration: 2000});
      this.loadProducts();
    }, (error)=>{
        console.log(error);        
    });
  }

}
