import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { AddClientComponent } from './component/add-client/add-client.component';
import { EditClientComponent } from './component/edit-client/edit-client.component';
import { DetailsClientComponent } from './component/details-client/details-client.component';
import { SettingsComponent } from './component/settings/settings.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { ClientService } from './services/client.service';
import { AuthClientService } from './services/auth-client.service';
import { environment } from 'src/environments/environment';
import { ListClientComponent } from './component/list-client/list-client.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    AddClientComponent,
    EditClientComponent,
    DetailsClientComponent,
    SettingsComponent,
    NotFoundComponent,
    NavbarComponent,
    SidebarComponent,
    ListClientComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  FormsModule ,ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AngularFireAuthModule
  ],
  providers: [ClientService,AuthClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
