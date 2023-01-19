import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DisplayComponent } from './components/display/display.component';
import { TokenComponent } from './components/token/token.component';

const routes: Routes = [
  {path:"",redirectTo:"/dashboard",pathMatch:"full"},
  {path:"dashboard" , component :DashboardComponent,children:[
    {path:"",redirectTo:"/dashboard/token",pathMatch:"full"},
    {path:'display',component:DisplayComponent},
    {path:'token',component:TokenComponent},
    {path:'**',component:DashboardComponent}
  ]} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
