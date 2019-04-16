import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './components/projects/projects.component';
import { SingleProjectComponent } from './components/single-project/single-project.component';
import { SingleIssueComponent } from './components/single-issue/single-issue.component';
import {LoginRegistrationComponent} from './components/login-registration/login-registration.component';
import {AuthGuardService} from './auth-guard.service';
import {HomeComponent} from './components/home/home.component';

const routes: Routes = [
  {
    'path': '',
    // redirectTo: 'projects',
    // pathMatch: 'full',
    component: HomeComponent
  },
  {
    'path': 'projects',
    component: ProjectsComponent,
    canActivate: [AuthGuardService]
  },
  // {
  //   'path': 'login',
  //   component: LoginRegistrationComponent
  // },
  {
    'path': `projects/:id/:name`,
     component: SingleProjectComponent,
  },
  {
    'path': `projects/:id/:name/:id/:name`,
    component: SingleIssueComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
