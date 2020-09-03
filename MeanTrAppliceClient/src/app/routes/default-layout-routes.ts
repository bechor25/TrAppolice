
import { Routes } from '@angular/router';

export const DEFAULT_ROUTES: Routes = [


    {
      path: 'auth',
      loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule)
  }

]
