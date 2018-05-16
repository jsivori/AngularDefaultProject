import { Component, OnInit } from '@angular/core';
import { Delivery } from '../models/delivery.model';
import { DeliveryService } from '../delivery.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-deliveries-list',
  templateUrl: './deliveries-list.component.html',
  styleUrls: ['./deliveries-list.component.css'],
  providers: [DeliveryService]
})
export class DeliveriesListComponent implements OnInit {
  public columns: Array<any>;
  public deliveryList: Delivery[];
  public constructor(private deliveryService: DeliveryService) {
  }

  getAllDeliveries() {
    this.deliveryList = this.deliveryService.listAllDeliveries();
  }

  addEditAndDelete(data, editButton, deleteButton) {
    for (var i = 0; i < data.length; i++) {
      data[i].edit = editButton;
      data[i].delete = deleteButton;
    }
    return data;
  }

  defGridOptions() {
    this.columns = [
      { title: 'Nombre', name: 'nombre', sort: 'asc', filtering: { filterString: '', placeholder: 'Filtrar por nombre' } },
      { title: 'Descripción', name: 'descripcion', sort: false, filtering: { filterString: '', placeholder: 'Filtrar por descripción' } },
      { title: 'Teléfono', name: 'telefono', sort: 'asc', filtering: { filterString: '', placeholder: 'Filtrar por teléfono' } },
      { title: 'Dirección', name: 'direccion', sort: 'asc', filtering: { filterString: '', placeholder: 'Filtrar por dirección' } },
      { title: 'Especialidades', name: 'especialidades', sort: 'asc', filtering: { filterString: '', placeholder: 'Filtrar por especialidad' } },
      { title: '', name: 'edit' }, 
      { title: '', name: 'delete' }
    ];
  }

  ngOnInit() {
    this.getAllDeliveries();
    this.defGridOptions();
  }
}