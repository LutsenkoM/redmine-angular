import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../api.service';
import {Projects} from '../../projects';
import {AuthService} from '../../auth.service';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

    // projects: Projects[] = [];

    constructor(private apiService: ApiService, private auth: AuthService) {
    }

    ngOnInit() {
        // this.apiService
        //     .getProject()
        //     .subscribe((projects: Projects[]) => {
        //         this.projects = projects;
        //     });

        this.apiService
            .getUser()
            .subscribe((response) => {
                console.log(response);
            });

    }

    public clickLogout() {
        localStorage.removeItem('token');
        this.auth.logout();
    }
}
