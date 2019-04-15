import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiService } from '../../api.service';
import { Issues } from '../../issues';

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
  comments: Array<{text: string}> = [];

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'] ;
      this.name = params['name'];
    });

    this.getIssuesList();

    if (JSON.parse(localStorage.getItem(`comments-project#${this.id}`) )) {
        this.comments = (JSON.parse(localStorage.getItem(`comments-project#${this.id}`) ));
    } else {
        this.comments = [];
    }

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
      this.comments.push({text: this.newComment});
      localStorage.setItem(`comments-project#${this.id}`, JSON.stringify( this.comments ));
      this.newComment = '';
  }





}
