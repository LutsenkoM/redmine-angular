import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProjectsComponent} from './components/projects/projects.component';
import {SingleProjectComponent} from './components/single-project/single-project.component';
import {SingleIssueComponent} from './components/single-issue/single-issue.component';
import {AuthGuardService} from './auth-guard.service';
import {HomeComponent} from './components/home/home.component';

const routes: Routes = [
    {
        'path': '',
        component: HomeComponent
    },
    {
        'path': 'projects',
        component: ProjectsComponent,
        canActivate: [AuthGuardService]
    },
    {
        'path': `projects/:id/:name`,
        component: SingleProjectComponent,
        canActivate: [AuthGuardService]
    },
    {
        'path': `projects/:id/:name/:id/:name`,
        component: SingleIssueComponent,
        canActivate: [AuthGuardService]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
