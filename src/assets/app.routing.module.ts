import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/login/login.component';
import { RegisterComponent } from 'src/app/register/register.component';

const route: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    }
    //  ,
    // {
    //     path: '\**\',
    //     redirectTo: '/login',
    //     pathMatch: 'full'
    // }
]

@NgModule({
    imports: [RouterModule.forRoot(route)],
    exports: [RouterModule]
})

export class AppRoutingModule { }