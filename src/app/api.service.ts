import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";


const headers = new HttpHeaders({
  'Content-Type' : 'application/json',
  'X-Redmine-API-Key': '2fda745bb4cdd835fdf41ec1fab82a13ddc1a54c',
});


@Injectable({
  providedIn: 'root'
})

export class ApiService {

  apiURL: string ='https://redmine.ekreative.com';

  constructor(private httpClient: HttpClient) {}

  public getProject() {
    return this.httpClient.get<any>(`${this.apiURL}/projects.json`,{headers})
  }

  public getIssues(id: any) {
    return this.httpClient.get<any>(`${this.apiURL}/issues.json?project_id=`+ id,{headers})
  }

  public getSingleIssue(id: any) {
    return this.httpClient.get<any>(`${this.apiURL}/issues/${id}.json`,{headers})
  }

  addIssue(newIssue: string, projectId: number): Observable<any>  {
    const data = {
      "issue": {
        "project_id": projectId,
        "subject": newIssue,
        "priority_id": 4
      }
    };
    return this.httpClient.post(`${this.apiURL}/issues.json`, data, {headers})
  }

  public trackIssue(issuesId: number, hours: number)  {
    const data = {
      "time_entry": {
        "issue_id": issuesId,
        "hours": hours
      }
    };

    return this.httpClient.post<any>(`${this.apiURL}/time_entries.json`, data, {headers})
  }

  public entriesIssue(issuesId: number) {
    console.log(issuesId + 'API');
    return this.httpClient.get<any>(`${this.apiURL}/time_entries.json?issue_id=${issuesId}`,{headers})
  }

  public deleteEntrie(entry: any) {
    return this.httpClient.delete<any>(`${this.apiURL}/time_entries/${entry.id}.json`, {headers});
  }




}
