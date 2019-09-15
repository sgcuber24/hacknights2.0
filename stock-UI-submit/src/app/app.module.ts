import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';


import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
 import {ChartModule} from 'angular2-highcharts';
 import { platformBrowserDynamic }  from '@angular/platform-browser-dynamic';
import { Chart1Component } from './chart1/chart1.component';
import {MatCardModule} from '@angular/material/card';
// import {MatDatepickerModule} from '@angular/material';
// import {MatFormFieldModule,MatNativeDateModule } from '@angular/material'

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,MatCardModule,
    JsonpModule,
    // MatDatepickerModule,
    // MatFormFieldModule,MatNativeDateModule,
    ChartModule.forRoot(require('highcharts'),)

  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    Chart1Component,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);

