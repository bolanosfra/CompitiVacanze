import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserItemComponent } from './user-item/user-item.component';
import { HelloWordComponent } from './hello-word/hello-word.component';

@NgModule({
  declarations: [
    AppComponent,
    UserItemComponent,
    HelloWordComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
