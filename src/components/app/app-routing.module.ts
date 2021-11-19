import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { LifeComponent } from '../life-view/life.component';
import { FireComponent } from '../fire-view/fire.component';
import { MotorComponent } from '../motor-view/motor.component';
import { NotFoundComponent } from '../not-found/not-found.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'life', component: LifeComponent },
  { path: 'fire', component: FireComponent },
  { path: 'motor', component: MotorComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }