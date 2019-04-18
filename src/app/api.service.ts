import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ApiService {

    private apiURL = 'https://redmine.ekreative.com';

    private headers: HttpHeaders;

    constructor(private httpClient: HttpClient) {
        this.headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        if (localStorage.apiKey) {
            this.headers = this.headers.set('X-Redmine-API-Key', localStorage.apiKey);
        }
    }

    public getProject(): Observable<any> {
        return this.httpClient.get(`${this.apiURL}/projects.json`, {headers : this.headers});
    }

    public getUser(): Observable<any> {
        return this.httpClient.get(`${this.apiURL}/users/current.json`, {headers : this.headers});
    }

    public logined(login: string, pass: string): Observable<any> {
        const data = {
            'login': login,
            'password': pass
        };

        // console.log(data);



                return this.httpClient.post(`${this.apiURL}/login`, data, { headers: this.headers });

        // http://login:password@redmine.org/issues.xml
                    // .subscribe((res: any) => {
                    //     localStorage.apiKey = res.token;
                    //     this.headers = this.headers.set('X-Redmine-API-Key', res.token);
                    //     resolve();
                    // });


    }

    public getIssues(id: any): Observable<any> {
        return this.httpClient.get(`${this.apiURL}/issues.json?project_id=${id}`, {headers : this.headers});
    }

    public getSingleIssue(id: any): Observable<any> {
        return this.httpClient.get(`${this.apiURL}/issues/${id}.json`, {headers : this.headers});
    }

    public addIssue(newIssue: string, projectId: number): Observable<any> {
        const data = {
            'issue': {
                'project_id': projectId,
                'subject': newIssue,
                'priority_id': 4
            }
        };
        return this.httpClient.post(`${this.apiURL}/issues.json`, data, {headers : this.headers});
    }

    public trackIssue(issuesId: number, hours: number): Observable<any> {
        const data = {
            'time_entry': {
                'issue_id': issuesId,
                'hours': hours
            }
        };

        return this.httpClient.post(`${this.apiURL}/time_entries.json`, data, {headers : this.headers});
    }

    public entriesIssue(issuesId: number): Observable<any> {
        return this.httpClient.get(`${this.apiURL}/time_entries.json?issue_id=${issuesId}`, {headers : this.headers});
    }

    public deleteEntrie(entry: any): Observable<any> {
        return this.httpClient.delete(`${this.apiURL}/time_entries/${entry.id}.json`, {headers : this.headers});
    }

}
