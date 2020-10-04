
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { ProductListComponent } from './product-list/product-list.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { UserListComponent } from './user-list/user-list.component';
import { ProductListServerComponent } from './product-list-server/product-list-server.component';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { ProductAboutComponent } from './product-about/product-about.component';
import { ProductHelpComponent } from './product-help/product-help.component';
import { ProductConactComponent } from './product-conact/product-conact.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        component: ProductListComponent
      },
      {
        path: 'product-update',
        component: ProductUpdateComponent
      },
      {
        path: 'userlist',
        component: UserListComponent
      },
      {
        path: 'product-conact',
        component: ProductConactComponent
      },
      {
        path: 'product-help',
        component: ProductHelpComponent
      },
      {
        path: 'phone-list',
        component: PhoneListComponent
      },
      {
        path: 'product-about',
        component: ProductAboutComponent
      },
      {
        path: 'userlist-server',
        component: ProductListServerComponent
      },
      {
        path: 'create',
        component: CreateProductComponent
      },
      {
        path: 'edit/:id',
        component: CreateProductComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }

