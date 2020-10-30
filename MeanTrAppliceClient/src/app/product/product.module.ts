
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModel, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { RTL } from '@progress/kendo-angular-l10n';
import { MatStepperModule } from '@angular/material/stepper'
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule, MatPseudoCheckboxModule } from '@angular/material/core';
import {   MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ProductRoutingModule } from './product-routing.module';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { UserListComponent } from './user-list/user-list.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ProductListServerComponent } from './product-list-server/product-list-server.component';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { ProductAboutComponent } from './product-about/product-about.component';
import { ProductHelpComponent } from './product-help/product-help.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ProductConactComponent } from './product-conact/product-conact.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { NgxMatFileInputModule} from '@angular-material-components/file-input';

import { MatIconModule } from '@angular/material/icon';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [CreateProductComponent, ProductListComponent, UserListComponent, ProductListServerComponent, PhoneListComponent, ProductAboutComponent, ProductHelpComponent, ProductConactComponent,ProductUpdateComponent, TestComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    ProductRoutingModule,
    MatStepperModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    NgxMatFileInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatRadioModule,
    MatCardModule,
    SweetAlert2Module.forRoot(),
 PdfViewerModule,
 MatIconModule,
 MatPseudoCheckboxModule,
 MatCheckboxModule








  ],
  providers:    [{ provide: RTL, useValue: true }],
})
export class ProductModule { }

