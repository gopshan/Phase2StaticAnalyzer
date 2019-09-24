import { Component, OnInit, Inject } from '@angular/core';
import { Github } from './github';
import { GithubService } from './github.service';
import { Router, CanActivate } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'git-hub',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})

export class GithubComponent implements OnInit {


  giturl: string;
  message: string;

  private _location: Location;
  public constructor(@Inject(Router) private router: Router) {

  }


  ngOnInit() {

  }

  getGitUrl(git: string) {

    this.giturl = git
    this.message = "Uploaded!!!";

  }

  backClicked() {
    this._location.back();
  }

  CheckStyleClick = function () {
    this.router.navigate(['/cs'], { state: { data: this.giturl } });
  }

  PmdClick = function () {
    this.router.navigate(['/pmd'], { state: { data: this.giturl } });
  }
  SimianClick = function () {
    this.router.navigate(['/sim'], { state: { data: this.giturl } });
  }
  AllClick = function () {
    this.router.navigate(['/all'], { state: { data: this.giturl } });
  }

}

