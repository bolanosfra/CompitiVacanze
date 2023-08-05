import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { ThirdComponentComponent } from './third-component/third-component.component';
import { FourtComponentComponent } from './fourt-component/fourt-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SecondComponentComponent,
    ThirdComponentComponent,
    FourtComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
