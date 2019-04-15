import { Component, OnInit } from '@angular/core';
import {Issues} from '../../issues';
import {ActivatedRoute, Params} from '@angular/router';
import {ApiService} from '../../api.service';

@Component({
  selector: 'app-single-issue',
  templateUrl: './single-issue.component.html',
  styleUrls: ['./single-issue.component.scss']
})
export class SingleIssueComponent implements OnInit {

  id: number;
  subject: string;
  name: string;
  issue: Issues;
  entries: any;
  spentTime: number = null;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.subject = params['name'];
    });

    this.getIssue();
    this.getEntriesList();
  }

  public getIssue() {
    this.apiService
        .getSingleIssue( this.id )
        .subscribe((response: Issues) => {
              this.issue = response;
              console.log(this.issue);
            },
            (error) => { alert('Error!'); });
  }

  public getEntriesList() {
    this.apiService
        .entriesIssue(this.id )
        .subscribe((response) => {
          this.entries = response;
            console.log(this.entries);
        });
  }

  public trackTime() {
    this.apiService
        .trackIssue(this.id, this.spentTime)
        .subscribe((response) => {
          this.getIssue();
          this.getEntriesList();
        });
    this.spentTime = null;
  }

  public deleteEntrie(entry: any ) {
    this.apiService
        .deleteEntrie(entry)
        .subscribe((response) => {
          this.getIssue();
          this.getEntriesList();
        });
  }
}
