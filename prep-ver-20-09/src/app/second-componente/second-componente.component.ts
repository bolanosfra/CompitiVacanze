import { Component } from '@angular/core';

@Component({
  selector: 'app-second-componente',
  templateUrl: './second-componente.component.html',
  styleUrls: ['./second-componente.component.css']
})
export class SecondComponenteComponent {
  name : string ;
  constructor() { 
    this.name = "second"
  }

  ngOnInit(): void {
  }

}
