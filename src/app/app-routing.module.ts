import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectsComponent} from "./components/projects/projects.component";
import {SingleProjectComponent} from "./components/single-project/single-project.component";

const routes: Routes = [
  {
    'path':'',
    redirectTo: 'projects',
    pathMatch:'full'
  },
  {
    'path':'projects',
    component: ProjectsComponent
  },
  {
    'path':`projects/:id`,
     component: SingleProjectComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
