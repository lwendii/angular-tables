import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './_shared/material/material.module';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { SimpleTableComponent } from './simple-table/simple-table.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    DynamicTableComponent,
    SimpleTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
