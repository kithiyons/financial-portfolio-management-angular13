import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PortfolioService } from '../../services/portfolio.service';
import { Investment } from '../../models/investment.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-investment-form',
  templateUrl: './investment-form.component.html'
})
export class InvestmentFormComponent {
  investmentForm: FormGroup;
  reviewMode = false; // toggle between form & review

  constructor(private fb: FormBuilder, private portfolioService: PortfolioService, private toastr: ToastrService, private router: Router) {
    this.investmentForm = this.fb.group({
      assetType: ['', Validators.required],
      quantity: [null, [Validators.required, Validators.min(1)]],
      purchasePrice: [null, [Validators.required, Validators.min(0.01)]],
      purchaseDate: ['', Validators.required]
    });
  }

  // Step 1: Go to review mode if valid
  reviewDetails() {
    if (this.investmentForm.valid) {
      this.reviewMode = true;
    } else {
      this.investmentForm.markAllAsTouched();
    }
  }

  // Step 2: Submit after confirmation
  submitForm() {
    const investment: Investment = {
      ...this.investmentForm.value,
      purchaseDate: new Date(this.investmentForm.value.purchaseDate)
    };
    this.portfolioService.addInvestment(investment);
    this.toastr.success('Investment added successfully!');
    this.investmentForm.reset();
    this.reviewMode = false;
    this.router.navigate(['']);
  }

  editForm() {
    this.reviewMode = false;
  }
}

