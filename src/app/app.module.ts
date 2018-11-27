import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeroComponent} from './heros.component';
import {SchoolComponent} from './app.school.component';
import {SchoolDEtailComponent} from './app.SchoolDEtail.Component';
import {SchoolService} from './app.school.service';
import {SchoolDEtailService} from './app.schoolDetail.service';
import {hideDirective} from './app.hide.directive';



@NgModule({
  declarations: [
    AppComponent, HeroComponent, SchoolComponent, SchoolDEtailComponent, hideDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SchoolService, SchoolDEtailService],
  bootstrap: [AppComponent]

})
export class AppModule { }
