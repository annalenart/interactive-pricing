import { Component, OnInit } from '@angular/core';

interface Pricing {
  views: string;
  price: string;
  discountPrice: string
}

type MultiplePricing = Array<Pricing>

@Component({
  selector: 'app-interactive',
  templateUrl: './interactive.component.html',
  styleUrls: ['./interactive.component.scss']
})
export class InteractiveComponent implements OnInit {
  pricing: Pricing;

  isYearly = false;

  multiplePricing: MultiplePricing = [
    {views: '10K', price: '8.00', discountPrice: '6.00'},
    {views: '50K', price: '12.00', discountPrice: '9.00'},
    {views: '100K', price: '16.00', discountPrice: '12.00'},
    {views: '500K', price: '24.00', discountPrice: '18.00'},
    {views: '1M', price: '36.00', discountPrice: '27.00'}
  ];

  ngOnInit(): void {
    [this.pricing] = this.multiplePricing;
  }

  toggleCosts(value: any) {
    this.isYearly = value.checked;
  }

  updatePricing(sliderValue: number | null): void {
    console.log(sliderValue)
    if (sliderValue) {
      this.pricing = this.multiplePricing[sliderValue];
    }
  }
}

