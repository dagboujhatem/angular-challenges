import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Angular HttpModule import
import { HttpClientModule } from '@angular/common/http';
// Angular Material Modules imports 
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
// import { MatPaginator } from '@angular/material/paginator';
// import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    // Angular HttpModule
    HttpClientModule,
    // Angular Material Modules 
    MatInputModule,
    MatButtonModule,
    // MatPaginator,
    // MatTableDataSource,
    MatSnackBarModule,
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    // Angular HttpModule
    HttpClientModule,
    // Angular Material Modules 
    MatInputModule, 
    MatButtonModule,
    // MatPaginator,
    // MatTableDataSource,
    MatSnackBarModule,
  ]
})
export class SharedModule { }
