import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prep-ver-20-09';
  name : string ;

  constructor() { 
    this.name = "app"
  }

  ngOnInit(): void {
  }
}
