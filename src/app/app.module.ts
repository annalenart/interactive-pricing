import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { InteractiveComponent } from './components/pricing/interactive/interactive.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { StaticComponent } from './components/pricing/static/static.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PricingComponent,
    InteractiveComponent,
    StaticComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
