import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CarrosModule} from './carros/carros.module' ;
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FormsModule } from '@angular/forms';
import { ListaComponent } from './carros/lista/lista.component';

const config = {
  apiKey: "AIzaSyAd7p87BlWFu3Ev1yHaa3xsIqekWyfINGk",
  authDomain: "aulaangular.firebaseapp.com",
  databaseURL: "https://aulaangular.firebaseio.com",
  projectId: "aulaangular",
  storageBucket: "aulaangular.appspot.com",
  messagingSenderId: "324192874372"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    FormsModule,
    CarrosModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
