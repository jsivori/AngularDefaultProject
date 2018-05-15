import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
  public tittle : string;
  public index_route : string;
  public about_route : string;
  public new_delivery_route : string;

  constructor() { }

  ngOnInit() {
    this.tittle = "Delivery Online";
    this.index_route = "Deliveries";
    this.new_delivery_route = "Nuevo Delivery";
    this.about_route = "Sobre";
  }

}
