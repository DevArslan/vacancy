import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './main/about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { StartPageComponent } from './main/start-page/start-page.component';
// Material
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
//
import { RequestComponent } from './main/request/request.component';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PricingComponent } from './main/pricing/pricing.component';
import { PricingCardComponent } from './main/pricing/pricing-card/pricing-card.component';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutComponent,
    StartPageComponent,
    RequestComponent,
    PricingComponent,
    PricingCardComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
