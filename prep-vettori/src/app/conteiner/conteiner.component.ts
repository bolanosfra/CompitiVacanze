import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conteiner',
  templateUrl: './conteiner.component.html',
  styleUrls: ['./conteiner.component.css']
})
export class ConteinerComponent implements OnInit {

  macchine: string[];
  constructor() { 
    this.macchine = ["Escavatori", "Gru", "Bulldozer", "Motolivellatrici"];
  }

  ngOnInit(): void {
  }
}
