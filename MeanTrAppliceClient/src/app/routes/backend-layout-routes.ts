
import { Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';

export const BACKEND_ROUTES: Routes = [

    {
        path: 'dashboard',
        loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule),
        canLoad: [AuthGuard]
    },
    {
        path: 'product',
        loadChildren: () => import('../product/product.module').then(m => m.ProductModule),
        canLoad: [AuthGuard]
    },
    {
      path: 'cms',
      loadChildren: () => import('../cms/cms.module').then(m => m.CmsModule),
      canLoad: [AuthGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule),
    canLoad: [AuthGuard]
}
]
