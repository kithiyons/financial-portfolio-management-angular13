import { Component } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { Investment } from '../../models/investment.model';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  investments: Investment[] = [];
  chartData: ChartData<'bar'> = { labels: [], datasets: [] };
  chartOptions: ChartOptions = { responsive: true };

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.investments = this.portfolioService.getInvestments();
     if (this.investments.length > 0) {
    const labels = this.investments.map(i => i.assetType);
    const quantities = this.investments.map(i => i.quantity);

    this.chartData = {
      labels,
      datasets: [
        {
          label: 'Quantity by Asset Type',
          data: quantities,
          backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726'],
        }
      ]
    };
  }
}
}