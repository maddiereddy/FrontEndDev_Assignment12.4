import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { displayPublic } from './display-public.pipe'
import { Truncate } from './truncate.pipe'
import { FilterNames } from './filter-names.pipe'
import { CustomLowercase } from './custom-lowercase.pipe'
import { CustomUppercase } from './custom-uppercase.pipe'

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, displayPublic, Truncate,
      FilterNames, CustomLowercase, CustomUppercase],
  bootstrap: [AppComponent]
})
export class AppModule { }
