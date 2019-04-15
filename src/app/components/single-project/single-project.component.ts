import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {ApiService} from '../../api.service';
import {Issues} from '../../issues';

// import {Projects} from "../../projects";

@Component({
  selector: 'app-single-project',
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.scss']
})
export class SingleProjectComponent implements OnInit {

  id: number;
  name: string;
  newIssue: string;
  newComment: string;
  issues: Issues[] = [];
  comments: Array<string> = [];

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'] ;
      this.name = params['name'];
    });

    this.getIssuesList();

    this.comments.push(JSON.parse(localStorage.getItem('comments') ));

  }

  public getIssuesList() {

      this.apiService
          .getIssues( this.id )
          .subscribe((issues: Issues[]) => {
                  this.issues = issues;
              },
              (error) => {alert('Sory, server don\'t response'); }
              );
  }

  public addIssue() {
    this.apiService
        .addIssue(this.newIssue, this.id)
        .subscribe((response) => {
            this.getIssuesList();
        });
    this.newIssue = '';
  }


  public addComment() {
      this.comments.push(this.newComment);
      this.newComment = '';
      localStorage.setItem('comments', JSON.stringify( this.comments ));
  }





}
