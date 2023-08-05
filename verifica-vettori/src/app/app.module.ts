import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CassettieraComponent } from './cassettiera/cassettiera.component';
import { CasellaPostaComponent } from './casella-posta/casella-posta.component';

@NgModule({
  declarations: [
    AppComponent,
    CassettieraComponent,
    CasellaPostaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
