import { Component, OnInit, Input, OnChanges, ViewEncapsulation } from '@angular/core';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-tableau-light',
  templateUrl: './tableau-light.component.html',
  styleUrls: ['./tableau-light.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TableauLightComponent implements OnChanges {
  @Input() headers: string[];
  constructor() {

  }

  ngOnChanges(): void {

  }

}
