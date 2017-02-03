import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp({
      apiKey: " apiKey here ",
      authDomain: "yourprojectname-xxxxx.firebaseapp.com",
      databaseURL: "https://yourprojectname-xxxx.firebaseio.com/",
      storageBucket: ""
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }