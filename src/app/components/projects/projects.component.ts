import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../shared/services/api/api.service';
import {Projects} from '../../shared/mocks/projects';
import {AuthService} from '../../shared/services/auth/auth.service';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

    projects: Projects[] = [];

    constructor(private apiService: ApiService, private auth: AuthService) {
    }

    ngOnInit() {
        this.apiService
            .getProject()
            .subscribe((projects: Projects[]) => {
                this.projects = projects;
            });
    }

    public clickLogout() {
        localStorage.removeItem('token');
        this.auth.logout();
    }
}
