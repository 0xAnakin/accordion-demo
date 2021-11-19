import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { LifeComponent } from '../life-view/life.component';
import { FireComponent } from '../fire-view/fire.component';
import { MotorComponent } from '../motor-view/motor.component';
import { AccordionComponent } from '../accordion/accordion.component';
import { AccordionEntryComponent } from '../accordion-entry/accordion-entry.component';
import { AccordionEntryContentComponent } from '../accordion-entry-content/accordion-entry-content.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LifeComponent,
    FireComponent,
    MotorComponent,
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
