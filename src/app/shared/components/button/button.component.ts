import { Component, OnInit, Input } from '@angular/core';

/**
 * redirect with href
 * redirect with routerLink
 * or do action by click
 */
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() label: string;
  @Input() href: string;
  @Input() route: string;
  @Input() action: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  public doAction(): void {
    console.log('btn clicked');
  }

}
