import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { GithubPRRequestModel } from 'src/app/models/github-pr-request.model';
import { GithubPRResponseModel } from 'src/app/models/github-pr-response.model';
import { GithubApiService } from 'src/app/services/github-api.service';

@Component({
  selector: 'app-github-page',
  templateUrl: './github-page.component.html',
  styleUrls: ['./github-page.component.scss']
})
export class GithubPageComponent implements OnInit {
  public gitHubUrl: FormControl;
  public responseArray: GithubPRResponseModel[] = [];

  constructor(private githubApi: GithubApiService) { }

  ngOnInit(): void {
    this.gitHubUrl = new FormControl('', [Validators.required]);
  }

  submit(): void {
    const request: GithubPRRequestModel = {
      gitHubUrl: this.gitHubUrl.value
    }
    this.githubApi.getOpenPrs(request).subscribe(response => {
      this.responseArray = response;
      console.log(response);
    })
  }

}
