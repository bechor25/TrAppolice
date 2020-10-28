import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmsRoutingModule } from './cms-routing.module';
import { HomeComponent } from './home/home.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [HomeComponent, PageNotFoundComponent],
  imports: [
    CommonModule,
    CmsRoutingModule,
    MatCardModule
  ]
})
export class CmsModule { }
