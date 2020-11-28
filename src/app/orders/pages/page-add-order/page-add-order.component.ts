import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from 'src/app/core/services/orders.service';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss']
})
export class PageAddOrderComponent implements OnInit {
  public title: string;
  public item = new Order();
  constructor(
    private route: ActivatedRoute,
    private os: OrdersService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe((datas) => {
      this.title = datas.title;
    });
  }

  public add(item: Order): void {
    this.os.add(item).subscribe((res) => {
      // this.router.navigate(['orders']);
      this.router.navigate(['../'], {relativeTo: this.route});
    });
  }

}
