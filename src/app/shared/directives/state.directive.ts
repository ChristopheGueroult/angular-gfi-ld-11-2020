import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {
  @Input() appState: string;
  @HostBinding('class') hostElemClass: string;
  constructor() {
  }
  ngOnChanges(): void {
    this.hostElemClass = `state-${this.appState.toLowerCase()}`;
  }

}

// récupérer le state d'un item
// généner un string state-canceled si item.state === CANCELED
// généner un string state-option si item.state === OPTION
// généner un string state-confirmed si item.state === CONFIRMED
// etc ... si autres states
// Binder la propriété class du host element (td) avec le string généré
