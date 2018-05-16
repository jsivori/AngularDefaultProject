import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './app-title.component.html',
  styleUrls: ['./app-title.component.css']
})
export class AppTitleComponent implements OnInit {
  public title : string;
  public image: string;
  public image_despegar: string;
  public image_angular : string;

  constructor() { }

  ngOnInit() {
    this.title = "Bienvenido";
    this.image_despegar = "../assets/img/despegar.jpg";
    this.image_angular = "../assets/img/angular.png";
    this.image = "../assets/img/delivery-img.jpeg";
  }

}
