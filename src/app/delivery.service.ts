import { Injectable } from '@angular/core';
import { deliveries } from './mock-deliveries/mock-deliveries';
import { Delivery } from './models/delivery.model';

@Injectable()

export class DeliveryService {

  constructor() { }

  saveOrUpdateDelivery(delivery, selectIdem) {
    var lastID = deliveries.length + 1;

    if (selectIdem) {
      delivery = this.copyAdContactToCoContact(delivery);
    }
    if (delivery.id == null) {
      delivery.id = lastID;
      deliveries.push(delivery);
    }
    else {
      for (var i = 0; i <= deliveries.length - 1; i++) {
        if (deliveries[i].id == delivery.id) {
          deliveries[i] = delivery;
          break;
        }
      }
    }
  }

  copyAdContactToCoContact(delivery) {
    for (var value in delivery.adContact) {
      delivery.coContact[value] = delivery.adContact[value];
    }
    return delivery;
  }

  deleteDelivery(id) {
    for (var i = 0; i <= deliveries.length - 1; i++) {
      if (deliveries[i].id === id) {
        deliveries.splice(i, 1);
        break;
      }
    }
  }

  getDelivery(id: number) {
    let delivery = deliveries.find(delivery => delivery.id == id);
    return delivery;
  }

  listAllDeliveries() {
    return deliveries;
  }

}
