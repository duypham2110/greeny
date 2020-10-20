import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      // chuyển đến products
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../home/home.module#HomePageModule'
          }
        ]
      },
      // chuyển đến products
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
      // chuyển đến cart
      {
        path: 'cart',
        children: [
          {
            path: '',
            loadChildren: '../cart/cart.module#CartPageModule'
          }
        ]
      },
      // chuyển đến profile
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: '../profile/profile.module#ProfilePageModule'
          }
        ]
      },
      // chuyển đến detail
      {
        path: 'detail',
        children: [
          {
            path: '',
            loadChildren: '../detail/detail.module#DetailPageModule'
          }
        ]
      },
      // chuyển đến detail-product
      {
        path: 'detail-product',
        children: [
          {
            path: '',
            loadChildren: '../detail-product/detail-product.module#DetailProductPageModule'
          }
        ]
      },
      // chuyển đến detail-bill
      {
        path: 'detail-bill',
        children: [
          {
            path: '',
            loadChildren: '../detail-bill/detail-bill.module#DetailBillPageModule'
          }
        ]
      },
      // chuyển đến bill
      {
        path: 'bill',
        children: [
          {
            path: '',
            loadChildren: '../bill/bill.module#BillPageModule'
          }
        ]
      },
      // chuyển đến login
      {
        path: 'login',
        children: [
          {
            path: '',
            loadChildren: '../login/login.module#LoginPageModule'
          }
        ]
      },
      // chuyển đến my info
      {
        path: 'my-info',
        children: [
          {
            path: '',
            loadChildren: '../my-info/my-info.module#MyInfoPageModule'
          }
        ]
      },
      // chuyển đến home
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
