import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClientComponent } from './component/add-client/add-client.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { DetailsClientComponent } from './component/details-client/details-client.component';
import { EditClientComponent } from './component/edit-client/edit-client.component';
import { LoginComponent } from './component/login/login.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { RegisterComponent } from './component/register/register.component';
import { SettingsComponent } from './component/settings/settings.component';

const routes: Routes = [
  {path:"" , component : DashboardComponent},
  
  {path:"login" , component : LoginComponent},
  {path:"register" , component : RegisterComponent},
  {path:"client/add" , component : AddClientComponent},
  {path:"client/edit/:id" , component : EditClientComponent},
  {path:"client/:id" , component : DetailsClientComponent},
  {path:"settings" , component : SettingsComponent},
  {path:"**" , component : NotFoundComponent},
  
  

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
