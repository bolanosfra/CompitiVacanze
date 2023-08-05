import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cassettiera',
  templateUrl: './cassettiera.component.html',
  styleUrls: ['./cassettiera.component.css']
})
export class CassettieraComponent implements OnInit  {
  persone : string[]

  constructor() { 
    this.persone = ["mario","luca","pino","milo","andrea"]
  }

  ngOnInit(): void {
  }
}
