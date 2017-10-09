import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { LazyLoadImageModule } from 'ng-lazyload-image'; 
import { AgmCoreModule } from '@agm/core'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Compt1Component } from './content/compt1/compt1.component';
import { Compt2Component } from './content/compt2/compt2.component';
import { Compt3Component } from './content/compt3/compt3.component';
import { Compt4Component } from './content/compt4/compt4.component';
import { Compt5Component } from './content/compt5/compt5.component';
import { Compt6Component } from './content/compt6/compt6.component';
import { Compt7Component } from './content/compt7/compt7.component';
import { Compt8Component } from './content/compt8/compt8.component';
import { Compt9Component } from './content/compt9/compt9.component';
import { TextconvertPipe } from './series/pipes/textconvert.pipe';
import { ServimapService } from './series/services/servimap.service';

const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDYSYvoJ4gOliPCSU565lkZQSoafgamsEg",
    authDomain: "examenangular.firebaseapp.com",
    databaseURL: "https://examenangular.firebaseio.com",
    projectId: "examenangular",
    storageBucket: "examenangular.appspot.com",
    messagingSenderId: "391367800107"
  }
};

@NgModule({
  declarations: [
    AppComponent,
    Compt1Component,
    Compt2Component,
    Compt3Component,
    Compt4Component,
    Compt5Component,
    Compt6Component,
    Compt7Component,
    Compt8Component,
    Compt9Component,
    TextconvertPipe
  ],
  imports: [
    BrowserModule,
    LazyLoadImageModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDjn0wMVzEN8lNe4GXj-zrRsD_G5p1qne0'
    })
  ],
  providers: [ServimapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
