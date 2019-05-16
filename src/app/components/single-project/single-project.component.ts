import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {ApiService} from '../../shared/services/api/api.service';
import {Issues} from '../../shared/mocks/issues';

@Component({
    selector: 'app-single-project',
    templateUrl: './single-project.component.html',
    styleUrls: ['./single-project.component.scss']
})
export class SingleProjectComponent implements OnInit {

    id: number;
    name: string;
    newIssue: string;
    issues: Issues[] = [];
    comments: Array<{ text: string, date: any }> = [];


    constructor(private route: ActivatedRoute, private apiService: ApiService) {
    }

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            this.id = +params['id'];
            this.name = params['name'];
        });

        this.getIssuesList();
    }

    public getIssuesList() {

        this.apiService
            .getIssues(this.id)
            .subscribe((issues: Issues[]) => {
                    this.issues = issues;
                },
                (error) => {
                    alert('Sory, server don\'t response');
                }
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

}
