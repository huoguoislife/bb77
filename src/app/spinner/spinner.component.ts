import { Component, Input } from '@angular/core';
 
@Component({
  selector: 'my-spinner',
  templateUrl: 'spinner.component.html'
})

export class SpinnerComponent {

  @Input()
  isLoading: boolean ;
 
  constructor() {
 
  }
 
}