import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { GithubPRRequestModel } from '../models/github-pr-request.model';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {

  constructor(private http: HttpClient) { }

  public getOpenPrs(request: GithubPRRequestModel): Observable<any> {
    return this.http.post(`${environment.baseUrl}/get-open-prs`, request);
  }
}
