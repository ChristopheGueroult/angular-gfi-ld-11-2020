import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/core/models/client';
import { StateClient } from 'src/app/core/enums/state-client.enum';
import { ClientsService } from 'src/app/core/services/clients.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})
export class PageListClientsComponent implements OnInit {
  public listHeaders: string[];
  public collection$: Observable<Client[]>;
  public states = Object.values(StateClient);

  constructor(

    private cs: ClientsService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {

    this.listHeaders = [
      'Nom',
      'Total HT',
      'Tva',
      'Total TTC',
      'State'
    ];

    this.collection$ = this.cs.collection;
  }

  public changeState(item: Client, event): void {
    const state = event.target.value;
    this.cs.changeState(item, state).subscribe((res) => {
      // tester les erreurs
      item.state = res.state;
      this.cd.detectChanges();
    });
  }

}
