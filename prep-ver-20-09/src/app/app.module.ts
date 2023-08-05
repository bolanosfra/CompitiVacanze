import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SecondComponenteComponent } from './second-componente/second-componente.component';
import { TerzoComponenteComponent } from './terzo-componente/terzo-componente.component';
import { QuartoComponenteComponent } from './quarto-componente/quarto-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    SecondComponenteComponent,
    TerzoComponenteComponent,
    QuartoComponenteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
