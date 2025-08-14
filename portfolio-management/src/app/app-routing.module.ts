import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InvestmentFormComponent } from './components/investment-form/investment-form.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'add', component: InvestmentFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
