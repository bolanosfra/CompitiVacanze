import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-macchina',
  templateUrl: './macchina.component.html',
  styleUrls: ['./macchina.component.css']
})
export class MacchinaComponent {
  @Input() name: string = "";

  pezzi: string[];
  constructor() {
    this.pezzi = ["bulloni", "viti", "ferro"];
   }
  

  ngOnInit(): void {
  }
}
