import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-localisation',
  templateUrl: './localisation.page.html',
  styleUrls: ['./localisation.page.scss'],
})
export class LocalisationPage implements OnInit {

  currentLocation: { latitude: number, longitude: number } | null = null;

  constructor() { }

  async updateLocation() {
    try {
      const coordinates = await Geolocation.getCurrentPosition();
      this.currentLocation = {
        latitude: coordinates.coords.latitude,
        longitude: coordinates.coords.longitude
      };
      // You can now use this.currentLocation to update the user's location in your app
    } catch (e) {
      console.error('Error getting location', e);
    }
  }

  ngOnInit() {
  }

}
