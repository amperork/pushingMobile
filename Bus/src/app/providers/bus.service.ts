import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Bus } from '../models/bus.model';

@Injectable({
  providedIn: 'root'
})
export class BusService {

  constructor(private firestore: AngularFirestore) { }

  addBus(bus: Bus) {
    return this.firestore.collection('buses').add(bus);
  }

  // Other CRUD operations can be added here

}

