import { Component } from '@angular/core';

@Component({
  selector: 'app-quarto-componente',
  templateUrl: './quarto-componente.component.html',
  styleUrls: ['./quarto-componente.component.css']
})
export class QuartoComponenteComponent {
  name : string ;

  constructor() {
    this.name = "quarto"
   }
   
  ngOnInit(): void {
  }

}

