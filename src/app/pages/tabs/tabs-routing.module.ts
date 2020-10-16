import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { CartPage } from '../cart/cart.page';
import { HomePage } from '../home/home.page';
import { ProductsPage } from '../products/products.page';
import { ProfilePage } from '../profile/profile.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../home/home.module#HomePageModule'
          }
        ]
      },
      {
        path: 'products',
        children: [
          {
            path: '',
            loadChildren: '../products/products.module#ProductsPageModule'
          },
          {
            path: ':id',
            loadChildren: '../detail/detail.module#DetailPageModule'
          }
        ]
      },
      {
        path: 'cart',
        children: [
          {
            path: '',
            loadChildren: '../cart/cart.module#CartPageModule'
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: '../profile/profile.module#ProfilePageModule'
          }
        ]
      },
      {
        path: 'login',
        children: [
          {
            path: '',
            loadChildren: '../login/login.module#LoginPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
