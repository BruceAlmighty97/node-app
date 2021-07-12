import { Component, Input, OnInit } from '@angular/core';
import { GithubPRResponseModel } from 'src/app/models/github-pr-response.model';

@Component({
  selector: 'app-github-pr-record',
  templateUrl: './github-pr-record.component.html',
  styleUrls: ['./github-pr-record.component.scss']
})
export class GithubPrRecordComponent implements OnInit {
  @Input() record: GithubPRResponseModel;

  constructor() { }

  ngOnInit(): void {
  }

}
