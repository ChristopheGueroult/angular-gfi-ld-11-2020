import { Directive, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective implements OnInit {
  @Input() appState: string;
  constructor() { }
  ngOnInit(): void {
    console.log(this.appState);
  }

}
