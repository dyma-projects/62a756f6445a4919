import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Exerice1Component } from './exerice1/exerice1.component';
import { FormsModule } from '@angular/forms';
import { Exercice2Component } from './exercice2/exercice2.component';
import { Exercice3Component } from './exercice3/exercice3.component';
import { Exercice4Component } from './exercice4/exercice4.component';


@NgModule({
  declarations: [
    AppComponent,
    Exerice1Component,
    Exercice2Component,
    Exercice3Component,
    Exercice4Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
