import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NavbartopComponent } from './components/navbartop/navbartop.component';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbartopComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    NavbartopComponent
  ]
})
export class AppModule { }
