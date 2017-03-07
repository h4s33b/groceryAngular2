import { 
    SignupComponent
 } from './signup/signup.component';
import { 
    LoginComponent
 } from './login/login.component'; 

 import {
     Routes , RouterModule
 } from '@angular/router'

 export const AuthRoutes : Routes = [{
     path : 'auth' ,
     children : [
         {path : 'signup' , component : SignupComponent},
         {path : 'login' , component : LoginComponent} ,
         {path : '', redirectTo : 'signup' , pathMatch : 'full'}
         ]
 }]