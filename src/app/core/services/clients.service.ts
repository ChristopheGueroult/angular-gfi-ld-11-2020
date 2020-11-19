import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Client } from '../models/client';
import { HttpClient } from '@angular/common/http';
import { StateClient } from '../enums/state-client.enum';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private urlApi = environment.urpApi;
  private pCollection: Observable<Client[]>;
  constructor(private http: HttpClient) {
    this.collection = this.http.get<Client[]>(`${this.urlApi}clients`);
  }

  // get collection
  get collection(): Observable<Client[]> {
    return this.pCollection;
  }

  // set collection
  set collection(col: Observable<Client[]>) {
    this.pCollection = col;
  }

  // change state
  public changeState(item: Client, state: StateClient): Observable<Client> {
    const obj = {...item};
    obj.state = state;
    return this.update(obj);
  }

  // update item in collection
  public update(item: Client): Observable<Client> {
    return this.http.put<Client>(`${this.urlApi}clients/${item.id}`, item);
  }

  // add item in collection

  // delete item in collection

  // get item by id in collection
}
