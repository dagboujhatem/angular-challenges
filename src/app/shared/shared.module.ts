import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 // Angular Material Modules imports 
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    // Angular Material Modules 
    MatInputModule,
    MatSliderModule,
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
     // Angular Material Modules 
     MatInputModule,
     MatSliderModule,
  ]
})
export class SharedModule { }
