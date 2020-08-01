import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from "./main/main.component";
import { StartPageComponent } from "./main/start-page/start-page.component";
import { RequestComponent } from "./main/request/request.component";
import { PricingComponent } from "./main/pricing/pricing.component";
import { AboutComponent } from "./main/about/about.component";

const routes: Routes = [
  { 
    path: '',
    component: MainComponent,
    children: [
      {
        path: '', 
        component: StartPageComponent 
      },
      {
        path: 'pricing', 
        component: PricingComponent 
      },
      {
        path: 'request', 
        component: RequestComponent 
      },
      {
        path: 'about', 
        component: AboutComponent 
      }
    ]
  },
  { 
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },



];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
  ],  
  exports: [RouterModule]
})
export class AppRoutingModule { }
