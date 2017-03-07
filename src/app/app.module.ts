import { 
  BrowserModule
 } from '@angular/platform-browser';
import { 
  NgModule
 } from '@angular/core';
import { 
  FormsModule
 } from '@angular/forms';
import { 
  HttpModule
 } from '@angular/http';
import { 
  RouterModule, 
  Routes
 } from '@angular/router';


/** Modules *****/
import{
  AuthModule
} from './auth/auth.module'



/******* End  */ 
/*********** Parent Components **************/  
import { 
  AppComponent
 } from './app.component';
/************ End ********/ 

/****** Routing module *****/ 
 import {
   AppRoutingModule
  } from './app.routing.config';

/******* End ********/ 


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule ,
    RouterModule,
    AppRoutingModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
