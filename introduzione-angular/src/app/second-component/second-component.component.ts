import { Component } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent {
  burzum : string ;
  constructor() {
    this.burzum = "second"


   }
  ngOnInit(): void {
  }
}
