import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { AccordionComponent } from '../accordion/accordion.component';
import { AccordionEntryComponent } from '../accordion-entry/accordion-entry.component';
import { AccordionEntryContentComponent } from '../accordion-entry-content/accordion-entry-content.component';

@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    AccordionEntryComponent,
    AccordionEntryContentComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
