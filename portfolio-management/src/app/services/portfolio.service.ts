import { Injectable } from '@angular/core';
import { Investment } from '../models/investment.model';

@Injectable({ providedIn: 'root' })
export class PortfolioService {
  private investments: Investment[] = [];

  getInvestments(): Investment[] {
    return this.investments;
  }

  addInvestment(investment: Investment) {
    this.investments.push(investment);
  }
}