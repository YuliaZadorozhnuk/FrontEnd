import {Component, OnInit} from '@angular/core';
import {DriversService} from './drivers.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {EditUserComponent} from '../edit-user/edit-user.component';
import {EditDriverComponent} from '../edit-driver/edit-driver.component';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {

  bsModalRef: BsModalRef;

  drivers: any = [];

  constructor(private driversService: DriversService, private modalService: BsModalService) {
  }

  ngOnInit() {
    this.getAllDrivers();
  }

  public changeStatus(driver) {
    this.driversService.setStatus(driver).subscribe(response => {
      this.getAllDrivers();
    });
  }

  public getAllDrivers() {
    this.driversService.getAllDrivers().subscribe(response => {
      this.drivers = response;
    });
  }

  public deleteDriver(id) {
    this.driversService.deleteDriver(id).subscribe(() => {
      this.getAllDrivers();
    });
  }

  public editDriver(driver) {
    const initialState = {
      driver: driver,
      drivers: this.drivers
    };
    this.bsModalRef = this.modalService.show(EditDriverComponent, {initialState});
    this.modalService.onHide.subscribe(() => {
      this.getAllDrivers();
    });
  }


}
