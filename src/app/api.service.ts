import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';
import {map} from 'rxjs/internal/operators';

@Injectable({
    providedIn: 'root'
})

export class ApiService {

    private headers: HttpHeaders;

    constructor(private httpClient: HttpClient) {
        this.headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'X-Redmine-API-Key': environment.api.token,
        });
    }

    public getProject(): Observable<any> {
        return this.httpClient.get(`${environment.api.host}/projects.json`, {headers: this.headers})
            .pipe(
                map((response: any) => response.projects)
            );
    }

    public getIssues(id: any): Observable<any> {
        return this.httpClient.get(`${environment.api.host}/issues.json?project_id=${id}`, {headers: this.headers})
            .pipe(
                map((response: any) => response.issues)
            );
    }

    public getSingleIssue(id: any): Observable<any> {

        return this.httpClient.get(`${environment.api.host}/issues/${id}.json`, {headers: this.headers})
            .pipe(
                map((response: any) => response.issue)
            );
    }

    public entriesIssue(issuesId: number): Observable<any> {
        return this.httpClient.get(`${environment.api.host}/time_entries.json?issue_id=${issuesId}`, {headers: this.headers})
            .pipe(
                map((response: any) => response.time_entries)
            );
    }

    public addIssue(newIssue: string, projectId: number): Observable<any> {
        const data = {
            'issue': {
                'project_id': projectId,
                'subject': newIssue,
                'priority_id': 4
            }
        };
        return this.httpClient.post(`${environment.api.host}/issues.json`, data, {headers: this.headers});
    }

    public trackIssue(issuesId: number, hours: number): Observable<any> {
        const data = {
            'time_entry': {
                'issue_id': issuesId,
                'hours': hours
            }
        };

        return this.httpClient.post(`${environment.api.host}/time_entries.json`, data, {headers: this.headers});
    }

    public deleteEntrie(entry: any): Observable<any> {
        return this.httpClient.delete(`${environment.api.host}/time_entries/${entry.id}.json`, {headers: this.headers});
    }

}
