import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DashboardGridComponent } from '../dashboard-grid/dashboard-grid.component';
import { DashboardListComponent } from '../dashboard-list/dashboard-list.component';
import { DashboardListDesktopComponent } from '../dashboard-list-desktop/dashboard-list-desktop.component';
import { DashboardListMobileComponent } from '../dashboard-list-mobile/dashboard-list-mobile.component';
import { LifePolicyComponent } from '../life-policy/life.component';
import { PropertyPolicyComponent } from '../property-policy/property.component';
import { MotorPolicyComponent } from '../motor-policy/motor.component';
import { AccordionComponent } from '../accordion/accordion.component';
import { AccordionEntryComponent } from '../accordion-entry/accordion-entry.component';
import { AccordionEntrySectionsComponent } from '../accordion-entry-sections/accordion-entry-sections.component';
import { SectionFieldsComponent } from '../section-fields/section-fields.component';
import { SectionTableComponent } from '../section-table/section-table.component';
import { SectionSubtitleComponent } from '../section-subtitle/section-subtitle.component';
import { SectionNotesComponent } from '../section-notes/section-notes.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DashboardGridComponent,
    DashboardListComponent,
    DashboardListDesktopComponent,
    DashboardListMobileComponent,
    LifePolicyComponent,
    PropertyPolicyComponent,
    MotorPolicyComponent,
    AccordionComponent,
    AccordionEntryComponent,
    AccordionEntrySectionsComponent,
    SectionFieldsComponent,
    SectionTableComponent,
    SectionSubtitleComponent,
    SectionNotesComponent
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
