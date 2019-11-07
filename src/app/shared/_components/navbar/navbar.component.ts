import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  urls = [
    { name: 'Curriculum vitae', url: ''},
    { name: 'Certifications', url: 'certifications'},
    { name: 'My Personal Projects', url: 'projects'},
  ]

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  navigateTo(url: string) {
    this.router.navigate([url]);
  }

}
