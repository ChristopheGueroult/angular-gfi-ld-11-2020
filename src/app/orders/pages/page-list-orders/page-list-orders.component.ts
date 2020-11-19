import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from 'src/app/core/services/orders.service';
import { Order } from 'src/app/core/models/order';
import { StateOrder } from 'src/app/core/enums/state-order.enum';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit, OnDestroy {
  public listHeaders: string[];
  // public collection: Order[];
  public collection$: Observable<Order[]>;
  public states = Object.values(StateOrder);
  private obs = new Observable((subsribers) => {
    subsribers.next('ola les amigos');
  });
  private sub: Subscription;
  constructor(
    private route: ActivatedRoute,
    private os: OrdersService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.sub = this.obs.subscribe((data) => {
      console.log(data);
    });
    this.listHeaders = [
      'Action',
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
    // this.os.collection.subscribe((datas) => {
    //   this.collection = datas;
    // });
    this.collection$ = this.os.collection;
  }

  public changeState(item: Order, event): void {
    const state = event.target.value;
    this.os.changeState(item, state).subscribe((res) => {
      // tester les erreurs
      item.state = res.state;
      this.cd.detectChanges();
    });
  }

  public openPopUp(): void {
    console.log('open popup');

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
