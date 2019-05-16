import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProjectsComponent} from './components/projects/projects.component';
import {HttpClientModule} from '@angular/common/http';
import {ApiService} from './shared/services/api/api.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SingleProjectComponent} from './components/single-project/single-project.component';
import {SingleIssueComponent} from './components/single-issue/single-issue.component';
import {LoginRegistrationComponent} from './components/login-registration/login-registration.component';
import {AuthService} from './shared/services/auth/auth.service';
import {AuthGuardService} from './shared/services/auth-guard/auth-guard.service';
import {HomeComponent} from './components/home/home.component';
import { LoginComponent } from './components/login-registration/login/login.component';
import { RegistrationComponent } from './components/login-registration/registration/registration.component';
import { CommentsComponent } from './components/single-project/comments/comments.component';


@NgModule({
    declarations: [
        AppComponent,
        ProjectsComponent,
        SingleProjectComponent,
        SingleIssueComponent,
        LoginRegistrationComponent,
        HomeComponent,
        LoginComponent,
        RegistrationComponent,
        CommentsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule
    ],
    providers: [ApiService, AuthService, AuthGuardService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
