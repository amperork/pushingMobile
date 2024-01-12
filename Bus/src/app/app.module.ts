import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJUpBnYJ_PncoHuZMQOpH5ILIO9ufNNGc",
  authDomain: "bus-app-ff5b6.firebaseapp.com",
  projectId: "bus-app-ff5b6",
  storageBucket: "bus-app-ff5b6.appspot.com",
  messagingSenderId: "328270300595",
  appId: "1:328270300595:web:cf8433909586fe7e2b77c6",
  measurementId: "G-D439LB8RCD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//const db = firebase.firestore();
//db.settings({timestampInSnapshots: truea});

@NgModule({
  declarations: [AppComponent],
  imports: [ AngularFireModule.initializeApp(firebaseConfig),AngularFireAuthModule,AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
