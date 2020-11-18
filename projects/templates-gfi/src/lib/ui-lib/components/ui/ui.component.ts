import { Component, OnInit } from '@angular/core';

/**
 *  need to projet 5 elements with class header, class nav and class footer class icon-nav, class icon-close
 */
@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UiComponent implements OnInit {
  /**
   *  open is boolean to add or remove class close aside on main element in dom
   */
  public open = true;
  constructor() { }

  ngOnInit(): void {
  }
  /**
   *  pass open to !open when icon is clicked in html
   */
  public toggle(): void {
    this.open = !this.open;
  }

}
