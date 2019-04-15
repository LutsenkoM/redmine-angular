import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './components/projects/projects.component';
import { SingleProjectComponent } from './components/single-project/single-project.component';
import { SingleIssueComponent } from './components/single-issue/single-issue.component';

const routes: Routes = [
  {
    'path': '',
    redirectTo: 'projects',
    pathMatch: 'full'
  },
  {
    'path': 'projects',
    component: ProjectsComponent
  },
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
