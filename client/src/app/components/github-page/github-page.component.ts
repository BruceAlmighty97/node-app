import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-github-page',
  templateUrl: './github-page.component.html',
  styleUrls: ['./github-page.component.scss']
})
export class GithubPageComponent implements OnInit {
  public gitHubUrl: FormControl

  constructor() { }

  ngOnInit(): void {
    this.gitHubUrl = new FormControl('', [Validators.required]);
  }

}
