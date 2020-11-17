import { Component, OnInit } from '@angular/core';

/**
 * @description need to projet 5 elements with class header, class nav and class footer class icon-nav, class icon-close
 */
@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UiComponent implements OnInit {
  public open = true;
  constructor() { }

  ngOnInit(): void {
  }

  public toggle(): void {
    this.open = !this.open;
  }

}
