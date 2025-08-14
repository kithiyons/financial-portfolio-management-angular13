import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InvestmentFormComponent } from './components/investment-form/investment-form.component';
import { HighlightDirective } from './directives/highlight.directive';
import { CurrencyFormatPipe } from './pipes/currency-format.pipe';
import { ToastrModule } from 'ngx-toastr';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    InvestmentFormComponent,
    HighlightDirective,
    CurrencyFormatPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NgChartsModule,
    ToastrModule.forRoot({   // <-- provides ToastrService globally
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    })
    // NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
