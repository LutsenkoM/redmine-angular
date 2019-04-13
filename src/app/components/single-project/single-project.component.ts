import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {ApiService} from "../../api.service";
import {Issues} from "../../issues";
import {Projects} from "../../projects";


@Component({
  selector: 'app-single-project',
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.scss']
})
export class SingleProjectComponent implements OnInit {

  id: number;
  name: string;

  issues: Issues[] = [];

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'] ;
      this.name = params['name'];
    });

    console.log(this.id);


    this.apiService
        .getIssues( this.id )
        .subscribe((issues: Issues[]) =>{
          this.issues = issues;
          console.log();
        })
        .(error) => { alert("Error!!!")};

  }

  // displayIssues(project: Issues) {
  //
  //   this.api
  //       .getIssues(project)
  //       .subscribe()
  //
  // }

}
