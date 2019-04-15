import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../api.service';
import {Projects} from '../../projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Projects[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService
        .getProject()
        .subscribe((projects: Projects[]) =>{
          this.projects = projects;
          console.log(this.projects);
        });
  }

}
