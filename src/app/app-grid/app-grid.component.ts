import { Component, OnInit, Input } from '@angular/core';
import { Delivery } from '../models/delivery.model';
import { DeliveryService } from '../delivery.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-grid',
  templateUrl: './app-grid.component.html',
  styleUrls: ['./app-grid.component.css'],
  providers: [DeliveryService]
})
export class AppGridComponent implements OnInit {

  @Input('options') gridOptions: Array<any>;
  @Input('data') dataForGrid: Array<any>;

  public deliveries: Delivery[];
  public rows = [];
  public deliveryToDelete: Delivery;

  public page: number = 1;
  public itemsPerPage: number = 15;
  public maxSize: number = 5;
  public numPages: number = 1;
  public length: number = 0;

  public config: any = {
    paging: true,
    sorting: { columns: this.gridOptions },
    filtering: { filterString: '' },
    className: ['table-striped', 'table-bordered']
  };
  public editButton = '<a data-placement="top" data-toggle="tooltip" title="Edit"><button class="btn btn-primary btn-xs" data-title="Edit" data-toggle="modal" data-target="#edit" ><span class="glyphicon glyphicon-pencil"></span></button></a></td>';
  public deleteButton = '<a (click)="confirmPopup()" data-placement="top" data-toggle="tooltip" title="Delete"><button class="btn btn-danger btn-xs" data-title="Delete" data-toggle="modal" data-target="#delete" ><span class="glyphicon glyphicon-trash"></span></button></a>';

  private data: Array<any>;

  public constructor(private deliveryService: DeliveryService, private _router: Router) {
  }


  addEditAndDelete(data, editButton, deleteButton) {
    for (var i = 0; i < data.length; i++) {
      data[i].edit = editButton;
      data[i].delete = deleteButton;
    }
    return data;
  }

  confirmPopup(delivery) {
    if (confirm("Seguro que desea eliminar el delivery?")){
      this.removeDelivery(delivery);
    }
  }

  public changePage(page: any, data: Array<any> = this.data): Array<any> {
    let start = (page.page - 1) * page.itemsPerPage;
    let end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
    return data.slice(start, end);
  }

  public changeSort(data: any, config: any): any {
    if (!config.sorting) {
      return data;
    }

    let columns = this.config.sorting.columns || [];
    let columnName: string = void 0;
    let sort: string = void 0;

    for (let i = 0; i < columns.length; i++) {
      if (columns[i].sort !== '' && columns[i].sort !== false) {
        columnName = columns[i].name;
        sort = columns[i].sort;
      }
    }

    if (!columnName) {
      return data;
    }

    return data.sort((previous: any, current: any) => {
      if (previous[columnName] > current[columnName]) {
        return sort === 'desc' ? -1 : 1;
      } else if (previous[columnName] < current[columnName]) {
        return sort === 'asc' ? -1 : 1;
      }
      return 0;
    });
  }

  public changeFilter(data: any, config: any): any {
    let filteredData: Array<any> = data;
    this.gridOptions.forEach((column: any) => {
      if (column.filtering) {
        filteredData = filteredData.filter((item: any) => {
          return item[column.name].match(column.filtering.filterString);
        });
      }
    });

    if (!config.filtering) {
      return filteredData;
    }

    if (config.filtering.columnName) {
      return filteredData.filter((item: any) =>
        item[config.filtering.columnName].match(this.config.filtering.filterString));
    }

    let tempArray: Array<any> = [];
    filteredData.forEach((item: any) => {
      let flag = false;
      this.gridOptions.forEach((column: any) => {
        if (item[column.name].toString().match(this.config.filtering.filterString)) {
          flag = true;
        }
      });
      if (flag) {
        tempArray.push(item);
      }
    });
    filteredData = tempArray;

    return filteredData;
  }

  public onChangeTable(config: any, page: any = { page: this.page, itemsPerPage: this.itemsPerPage }): any {
    if (config.filtering) {
      Object.assign(this.config.filtering, config.filtering);
    }

    if (config.sorting) {
      Object.assign(this.config.sorting, config.sorting);
    }

    let filteredData = this.changeFilter(this.data, this.config);
    let sortedData = this.changeSort(filteredData, this.config);
    this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
    this.length = sortedData.length;
  }

  public onCellClick(data: any): any {

    if (data.column == "delete") {
      this.confirmPopup(data.row);
    }
    if (data.column == "edit") {
      this._router.navigate(['/edit/' + data.row.id]);
    }
  }

  removeDelivery(delivery) {
    this.deliveryService.deleteDelivery(delivery.id);
    this.getDeliveries();
  }

  getDeliveries() {
    this.data = this.deliveryService.listAllDeliveries();
    this.onChangeTable(this.config);
  }

  editDelivery() {
    this._router.navigate(['/edit/' + this.deliveryToDelete.id]);
  }

  ngOnInit() {
    this.length = this.dataForGrid.length;
    this.data = this.addEditAndDelete(this.dataForGrid, this.editButton, this.deleteButton);
    this.onChangeTable(this.config);
  }
}

