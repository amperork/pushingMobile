import { Component, OnInit } from '@angular/core';
import { LocationService } from '../providers/location.service';
import { Journey } from '../models/journey.model';

@Component({
  selector: 'app-journey',
  templateUrl: './journey.page.html',
  styleUrls: ['./journey.page.scss'],
})
export class JourneyPage implements OnInit {
  journey: Journey = {
    departurePlace: '',
    departureLat: 0,
    departureLong: 0,
    departureTime: new Date(),
    arrivalPlace: '',
    arrivalLat: 0,
    arrivalLong: 0,
    busName: ''
  };

  constructor(private locationService : LocationService) { }
  addJourney() {
    this.locationService.addJourney(this.journey).then(() => {
      console.log('Journey added successfully!');
      // Reset form or provide feedback
    }).catch(error => {
      console.error('Error adding journey: ', error);
    });
  }

  ngOnInit() {
  }

}
