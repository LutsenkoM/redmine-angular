import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Projects } from '../../projects';
import {AuthService} from '../../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Projects[] = [];

  constructor(private apiService: ApiService, private auth: AuthService) {}

  ngOnInit() {
    this.apiService
        .getProject()
        .subscribe((projects: Projects[]) =>{
          this.projects = projects;
          console.log(this.projects);
        });
  }

    public clickLogout() {
        this.auth.logout();
    }
}
