import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Journey } from '../models/journey.model';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private firestore: AngularFirestore) { }
  addJourney(journey: Journey) {
    return this.firestore.collection('journeys').add(journey);
  }
}
