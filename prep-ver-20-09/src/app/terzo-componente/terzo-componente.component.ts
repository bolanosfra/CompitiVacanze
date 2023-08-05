import { Component } from '@angular/core';

@Component({
  selector: 'app-terzo-componente',
  templateUrl: './terzo-componente.component.html',
  styleUrls: ['./terzo-componente.component.css']
})
export class TerzoComponenteComponent {
  name : string ;
  constructor() { 
    this.name = "terzo"
  }

  ngOnInit(): void {
  }
}
