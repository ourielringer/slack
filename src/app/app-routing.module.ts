import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaswordComponent } from './comse/pasword/pasword.component';
import { SigninComponent } from './comse/signin/signin.component';
import { CreateworkspaceComponent } from './comse/createworkspace/createworkspace.component';


const routes: Routes = [
  {path:'signin' , component:SigninComponent}, 
  {path:'signin/pasword' , component:PaswordComponent},
  {path:'signin/createworkspace' , component:CreateworkspaceComponent}, 
 
  {path:'' , redirectTo:'signin' , pathMatch:'full'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
