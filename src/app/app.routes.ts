import { Routes } from '@angular/router';
import { ProductComponent } from './products/pages/product/product.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'product', component: ProductComponent
      },
      {
        path: '**', redirectTo: 'product'
      }


    ]
  }

];
