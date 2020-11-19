import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-tableau-light',
  templateUrl: './tableau-light.component.html',
  styleUrls: ['./tableau-light.component.scss']
})
export class TableauLightComponent implements OnChanges {
  @Input() headers: string[];
  @Input() col: Order[];
  constructor() {
    console.log(this.headers);
    console.log(this.col);
  }

  ngOnChanges(): void {
    console.log(this.headers);
    console.log(this.col);
  }

}
