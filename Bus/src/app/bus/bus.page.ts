import { Component } from '@angular/core';
import { BusService } from '../providers/bus.service';
import { Bus } from '../models/bus.model';


@Component({
  selector: 'app-bus',
  templateUrl: './bus.page.html',
  styleUrls: ['./bus.page.scss'],
})
export class BusPage {
  bus: Bus = { name: '', seats: 0, color: '' };

  constructor(private busService: BusService) { }

  addBus() {
    this.busService.addBus(this.bus).then(() => {
      console.log('Bus added successfully!');
      // Reset the form or give user feedback
    }).catch(error => {
      console.error('There was an error adding the bus: ', error);
    });
  }

}
