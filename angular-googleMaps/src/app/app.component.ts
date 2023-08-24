import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'server mappe';
  //Aggiungiamo latitudine e longitudine di un luogo
  center : any;
  center1 : any;
  center2: any;
  position : any;
  position1 : any;
  position2 : any;
  label : string;
  label1 : string;
  label2 : string;
  circleOptions: any;
  markerOptions: google.maps.MarkerOptions;
  vertices: google.maps.LatLngLiteral[];
  

  constructor()
  {
    this.center={lat: 45.506738, lng: 9.190766};
    this.position = this.center;
    this.label = "ciao";


    this.center1={lat: 45.54733500240606, lng: 9.16014811323195};
    this.position1 = this.center1;
    this.label1 = "casaG";


    this.center2={lat: 45.54074874668811, lng: 9.16561749701464};
    this.position2 = this.center2;
    this.label2 = "casaO";

    this.circleOptions = {fillColor : 'blue'}

    let iconData : google.maps.Icon = {
      url:'./assets/img/cat_acrobat.ico',
      scaledSize : new google.maps.Size(60,60)
    }
    this.markerOptions = {icon:iconData}

    this.vertices = [
      {  lat: this.center.lat + 0.001, lng: this.center.lng - 0.002 },
      {  lat: this.center.lat, lng: this.center.lng },
      {  lat: this.center.lat - 0.001, lng: this.center.lng - 0.002}
    ];
  }
}
