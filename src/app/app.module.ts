import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QouteComponent } from './qoute/qoute.component';
import { QouteFormComponent } from './qoute-form/qoute-form.component';

@NgModule({
  declarations: [
    AppComponent,
    QouteComponent,
    QouteFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
