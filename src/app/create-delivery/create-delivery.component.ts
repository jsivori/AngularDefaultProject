import { Component, OnInit, Renderer } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Delivery } from '../models/delivery.model';
import { Contact } from '../models/contact.model';
import { DeliveryService } from '../delivery.service';
import { app_routes } from '../app.routes';
import { Validators } from '@angular/forms';
import { AmazingTimePickerService } from 'amazing-time-picker';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-delivery',
  templateUrl: './create-delivery.component.html',
  styleUrls: ['./create-delivery.component.css'],
  providers: [DeliveryService]
})
export class CreateDeliveryComponent implements OnInit {
  public selectedTimeTo: string;
  public selectedTimeFrom: string;
  public title: string;
  public params: Params;
  selectIdem: boolean = false;
  delivery = new Delivery(null, '', '', '', '', '', '', '', new Contact('', '', '', ''), new Contact('', '', '', ''));
  constructor(private renderer: Renderer, private _route: ActivatedRoute, private deliveryService: DeliveryService, private _router: Router, private atp: AmazingTimePickerService) {
  }

  ngOnInit() {
    this._route.params.forEach((params: Params) => {
      let id = params['id'];
      if (id != undefined) {
        console.log('formulario edición de delivery cargado');
        this.getDelivery();
        this.title = 'Editar delivery';
      } else {
        console.log('formulario carga de delivery cargado');
        this.title = 'Crear nuevo delivery';
      }
    });
  }

  getDelivery() {
    this._route.params.forEach((params: Params) => {
      let id = params['id'];
      this.delivery = this.deliveryService.getDelivery(id);
    });
  }

  openFrom() {
    const amazingTimePicker = this.atp.open();
    amazingTimePicker.afterClose().subscribe(time => {
      this.delivery.horario_desde = time;
    });
  }

  openTo() {
    const amazingTimePicker = this.atp.open();
    amazingTimePicker.afterClose().subscribe(time => {
      this.delivery.horario_hasta = time;
    });
  }

  onSubmit() {
    this.deliveryService.saveOrUpdateDelivery(this.delivery, this.selectIdem);
    this._router.navigate(['/']);
  }

  checkIdem(e) {
    this.selectIdem = e.target.checked;
  }
}

