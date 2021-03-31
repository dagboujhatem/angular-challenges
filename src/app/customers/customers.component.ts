import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DeleteConfirmDialogComponent } from './components/dialog/delete-confirm-dialog/delete-confirm-dialog.component';
import { UpdateDialogComponent } from './components/dialog/update-dialog/update-dialog.component';
import { ProductsService } from './services/products.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'description', 'quantity', 'price', 'Actions'];
  dataSource : MatTableDataSource<any>;

  constructor(private productsService: ProductsService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog) { }

  ngOnInit(): void {
   this.loadProducts();
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  loadProducts()
  {
    this.productsService.getAllProducts().subscribe((response)=>{
      // this.productsList = response;
      this.dataSource = new MatTableDataSource<any>(response);
      // Assign the paginator *after* dataSource is set
      this.dataSource.paginator = this.paginator;
      // Assign the sort *after* dataSource is set
      this.dataSource.sort = this.sort;
    }, (error)=>{
        console.log(error);        
    });
  }

  deleteProduct(id)
  {
    const deleteDialog = this.dialog.open(DeleteConfirmDialogComponent, {
      maxWidth: "400px",
      data: {}
    });

    deleteDialog.afterClosed().subscribe(result => {
      // console.log(result);
      if(result)
      {
        this.productsService.deleteProductById(id).subscribe((response)=>{
          this.snackBar.open("Product deleted successfully!", "Done", {duration: 2000});
          this.loadProducts();
        }, (error)=>{
            console.log(error);        
        });
      }
    });
  }

  updateProduct(data)
  {
    const updateDialog = this.dialog.open(UpdateDialogComponent, {
      maxWidth: "400px",
      data: data
    });

    updateDialog.afterClosed().subscribe(result => {
      // console.log(result);
      if(result !== null)
      {
        this.productsService.updateProductById(data.id, result).subscribe((response)=>{
          this.snackBar.open("Product updated successfully!", "Done", {duration: 2000});
        }, (error)=>{
            console.log(error);        
        });
      }
    });
  }

}
