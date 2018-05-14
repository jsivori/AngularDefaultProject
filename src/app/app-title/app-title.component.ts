import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './app-title.component.html',
  styleUrls: ['./app-title.component.css']
})
export class AppTitleComponent implements OnInit {
  public title : string;
  public image : string;

  constructor() { }

  ngOnInit() {
    this.title = "Bienvenido a DeliveryApp";
    this.image = "../assets/img/delivery-img.jpeg";
  }

}
