import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";


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


}
