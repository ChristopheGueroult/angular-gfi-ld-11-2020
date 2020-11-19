import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from 'src/app/core/services/orders.service';
import { Order } from 'src/app/core/models/order';
import { StateOrder } from 'src/app/core/enums/state-order.enum';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {
  public listHeaders: string[];
  public collection: Order[];
  public states = Object.values(StateOrder);
  constructor(
    private route: ActivatedRoute,
    private os: OrdersService
  ) { }

  ngOnInit(): void {
    this.listHeaders = [
      'Type',
      'Client',
      'NbJours',
      'TjmHT',
      'Total HT',
      'Total TTC',
      'State'
    ];
    this.route.data.subscribe((param) => {
      // console.log(param);
    });
    this.os.collection.subscribe((datas) => {
      this.collection = datas;
    });
  }

  public changeState(item: Order, event): void {
    const state = event.target.value;
    this.os.changeState(item, state).subscribe((res) => {
      // tester les erreurs
      item.state = res.state;
    });
  }
}
