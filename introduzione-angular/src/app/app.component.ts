import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'introduzione-angular';
  burzum : string ;
  constructor() {
    this.burzum = "app"

   }

  ngOnInit(): void {
  }
}
