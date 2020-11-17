import { Component, OnInit, Input, OnChanges, DoCheck, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  // public title = 'Nikki\s App';
  @Input() title: any;
  constructor() {
  }
}
