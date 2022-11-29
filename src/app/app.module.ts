import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookentryComponent } from './bookentry/bookentry.component';
import { RegComponent } from './reg/reg.component';

@NgModule({
  declarations: [
    AppComponent,
    BookentryComponent,
    RegComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
