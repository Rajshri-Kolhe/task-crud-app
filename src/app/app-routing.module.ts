import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { PnfComponent } from './pnf/pnf.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskListComponent } from './task-list/task-list.component';
import { CreateNewtaskComponent } from './create-newtask/create-newtask.component';

const routes: Routes = [
  {path:"",redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'sign-up',component:SignupComponent},
  {path:'Home',component:HomeComponent},
  {path:'tasks',component:TasksComponent,children:[
    {path:'task-list',component:TaskListComponent},
    {path:'create-new-task',component:CreateNewtaskComponent},
    {path:'edit/:id',component:CreateNewtaskComponent}
  ]},
 {path:'**',component:PnfComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
