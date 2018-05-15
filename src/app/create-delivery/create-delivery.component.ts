import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact.model';

@Component({
  selector: 'app-create-delivery',
  templateUrl: './create-delivery.component.html',
  styleUrls: ['./create-delivery.component.css']
})
export class CreateDeliveryComponent implements OnInit {
  public title : string;
  public delivery : Contact;

  constructor() {
    this.delivery = new Contact('','','','')
    //this.localStorageSave();
  }
/*
  localStorageSave() {
    console.log("asdasd");
    localStorage.setItem("item", "asdasd");
  }
*/
  ngOnInit() {
    this.title = "Nuevo Delivery";
    
  }

}
