import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { LifePolicyComponent } from '../life-policy/life.component';
import { PropertyPolicyComponent } from '../property-policy/property.component';
import { MotorPolicyComponent } from '../motor-policy/motor.component';
import { NotFoundComponent } from '../not-found/not-found.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'life', component: LifePolicyComponent },
  { path: 'property', component: PropertyPolicyComponent },
  { path: 'motor', component: MotorPolicyComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }