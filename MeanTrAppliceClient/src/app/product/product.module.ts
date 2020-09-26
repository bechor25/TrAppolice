
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModel, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { SignaturePadModule } from '@ng-plus/signature-pad';

import { RTL } from '@progress/kendo-angular-l10n';
import { MatStepperModule } from '@angular/material/stepper'
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import {   MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';


import { ProductRoutingModule } from './product-routing.module';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { UserListComponent } from './user-list/user-list.component';
import {  MatFormFieldModule } from '@angular/material/form-field';
import { ProductListServerComponent } from './product-list-server/product-list-server.component';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { ProductAboutComponent } from './product-about/product-about.component';




@NgModule({
  declarations: [CreateProductComponent, ProductListComponent, UserListComponent, ProductListServerComponent, PhoneListComponent, ProductAboutComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    ProductRoutingModule,
    MatStepperModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatRadioModule,
    PDFExportModule,
    SignaturePadModule

  ],
  providers:    [{ provide: RTL, useValue: true }],
})
export class ProductModule { }

