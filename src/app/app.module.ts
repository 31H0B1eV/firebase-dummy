import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyAuSpUv00DGqq7FcPSIkqGCAW0gniAoPEg",
  authDomain: "contactng2dummyapp.firebaseapp.com",
  databaseURL: "https://contactng2dummyapp.firebaseio.com",
  storageBucket: "",
  messagingSenderId: "1072580747800"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
