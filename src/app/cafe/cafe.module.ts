import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CafeListComponent } from './cafe-list/cafe-list.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";



@NgModule({
  declarations: [
    CafeListComponent
  ],
  exports: [
    CafeListComponent
  ],
  imports: [
    CommonModule,
    HttpClientTestingModule
  ]
})
export class CafeModule { }
