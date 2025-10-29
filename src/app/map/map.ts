import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  imports: [],
  templateUrl: './map.html',
  styleUrl: './map.scss',
})
export class Map implements AfterViewInit {
  private map: L.Map | undefined;

  stadiumLocations = [
    { name: 'Camp Nou', lat: 41.3809, lon: 2.1228 },
    { name: 'Wembley Stadium', lat: 51.556, lon: -0.2796 },
    { name: 'Allianz Arena', lat: 48.2188, lon: 11.6247 },
    { name: 'San Siro', lat: 45.4781, lon: 9.1245 }
  ];

  private initMap(): void {
    this.map = L.map('map').setView([48.2082, 16.3738], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.initMap()
    })
  }
}
