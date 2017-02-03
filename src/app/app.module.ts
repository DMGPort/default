import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';

export const firebaseConfig = {
      apiKey: "AIzaSyBa1NobiJohnNG6LnsTTkYUts5HqAnBA_8",
      authDomain: "whatsup-c2af3.firebaseapp.com",
      databaseURL: "https://whatsup-c2af3.firebaseio.com/",
      storageBucket: ""
}
export const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    MaterialModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }