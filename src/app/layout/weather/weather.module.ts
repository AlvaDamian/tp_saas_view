import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SimpleTableModule } from 'ng2-simple-table';

import { ViewComponent } from './view';
import { ViewAllComponent } from './view-all';
import { WeatherRoutingModule } from './weather.routing';

@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    WeatherRoutingModule,
    Ng2SimpleTableModule
  ],
  declarations: [
    ViewComponent,
    ViewAllComponent
  ]
})
export class WeatherModule { }
