import {
    NgModule
} from '@angular/core';
import {
    RouterModule , 
    Routes
} from '@angular/router';

/****** Import routes path ***********/ 
import {
    AuthRoutes
} from './auth/auth.routes.config'

/************ End ***************/ 

const appRoutes : Routes =[
    ...AuthRoutes ,
    {path : '' , redirectTo : 'auth/signup' , pathMatch : 'full'},
]
@NgModule({
    imports : [RouterModule.forRoot(appRoutes)],
    exports : [RouterModule]
})

export class AppRoutingModule { }