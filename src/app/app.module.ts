import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './components/projects/projects.component';
import {HttpClientModule} from "@angular/common/http";
import {ApiService} from "./api.service";
import {FormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MyOwnCustomMaterialModule} from "./material";
import { SingleProjectComponent } from './components/single-project/single-project.component';
import { SingleIssueComponent } from './components/single-issue/single-issue.component';
import { LoginRegistrationComponent } from './components/login-registration/login-registration.component';
import {AuthService} from './auth.service';
import {AuthGuardService} from './auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    SingleProjectComponent,
    SingleIssueComponent,
    LoginRegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MyOwnCustomMaterialModule
  ],
  providers: [ApiService, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
