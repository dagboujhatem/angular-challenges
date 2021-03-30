import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
// import { MatPaginator } from '@angular/material/paginator';
// import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit  {

  products: any;

  constructor() { }

  ngOnInit(): void {
    this
  }

  deleteProduct(id)
  {

  }

}
