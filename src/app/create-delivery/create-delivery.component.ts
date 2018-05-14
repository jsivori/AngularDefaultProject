import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-delivery',
  templateUrl: './create-delivery.component.html',
  styleUrls: ['./create-delivery.component.css']
})
export class CreateDeliveryComponent implements OnInit {
  public title : string;

  constructor() {
    this.grabar();
  }

  grabar() {
    console.log("asdasd");
    localStorage.setItem("item", "asdasd");
  }

  ngOnInit() {
    this.title = "Nuevo Delivery";
    
  }

}
