import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './comp/login/login.component';
import { SignUpComponent } from './comp/sign-up/sign-up.component';
import { RDashComponent } from './comp/r-dash/r-dash.component';


const routes: Routes =[
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignUpComponent},
  { path: 'dashboard',component: RDashComponent},
  { path: '',   redirectTo: '/login', pathMatch: 'full' }

]


@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
