import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
  public image : string;
  constructor() { }

  ngOnInit() {
    this.image = "../assets/img/404-img.png";
  }

}
