import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Po1Component } from './componentes/po1/po1.component';
import { Pok2Component } from './componentes/pok2/pok2.component';
import { Poke3Component } from './componentes/poke3/poke3.component';

@NgModule({
  declarations: [
    AppComponent,
    Po1Component,
    Pok2Component,
    Poke3Component,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
