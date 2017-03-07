import {
    NgModule
} from '@angular/core'
import {
    CommonModule
} from '@angular/common'
import { 
  FormsModule 
 } from '@angular/forms';

/*********** Components **************/  
import { 
    SignupComponent
 } from './signup/signup.component';
import { 
    LoginComponent
 } from './login/login.component'; 
/************ End ********/ 




@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule

  ],
  providers: []
})
export class AuthModule { }
