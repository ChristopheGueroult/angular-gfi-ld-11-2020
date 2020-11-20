import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';
import { PageAddOrderComponent } from './pages/page-add-order/page-add-order.component';

const routes: Routes = [
  {
    path: '',
    component: PageListOrdersComponent,
    data: {title: 'List orders'}
  },
  {
    path: 'add',
    component: PageAddOrderComponent,
    data: {title: 'Add order'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
