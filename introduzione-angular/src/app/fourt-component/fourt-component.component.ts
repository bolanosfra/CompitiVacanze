import { Component } from '@angular/core';

@Component({
  selector: 'app-fourt-component',
  templateUrl: './fourt-component.component.html',
  styleUrls: ['./fourt-component.component.css']
})
export class FourtComponentComponent {
  burzum : string ;
  constructor() {
    this.burzum = "fourt"

   }

  ngOnInit(): void {
  }
}
