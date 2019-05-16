import {Component, OnInit} from '@angular/core';
import {Issues} from '../../shared/mocks/issues';
import {ActivatedRoute, Params} from '@angular/router';
import {ApiService} from '../../shared/services/api/api.service';
import {Entry} from '../../shared/mocks/entry';

@Component({
    selector: 'app-single-issue',
    templateUrl: './single-issue.component.html',
    styleUrls: ['./single-issue.component.scss']
})
export class SingleIssueComponent implements OnInit {

    id: number;
    subject: string;
    name: string;
    total_spent_hours: number;
    issue: Issues;
    entries: Entry[];
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
            .getSingleIssue(this.id)
            .subscribe((response: Issues) => {
                    this.issue = response;
                    this.total_spent_hours = this.issue.total_spent_hours;
                },
                (error) => {
                    alert('Error!');
                });
    }

    public getEntriesList() {
        this.apiService
            .entriesIssue(this.id)
            .subscribe((response: Entry[]) => {
                this.entries = response;
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

    public deleteEntrie(entry: any) {
        this.apiService
            .deleteEntrie(entry)
            .subscribe((response) => {
                this.getIssue();
                this.getEntriesList();
            });
    }
}
