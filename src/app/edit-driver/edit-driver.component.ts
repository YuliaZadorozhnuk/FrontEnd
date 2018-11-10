import {Component, Input, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';
import {DriversService} from '../drivers/drivers.service';

@Component({
  selector: 'app-edit-driver',
  templateUrl: './edit-driver.component.html',
  styleUrls: ['./edit-driver.component.css']
})
export class EditDriverComponent implements OnInit {

  @Input() drivers;
  @Input() driver;
  tempDriver;

  constructor(public bsModalRef: BsModalRef, private driversService: DriversService) { }

  ngOnInit(): void {
    this.tempDriver = {
      id: this.driver.id,
      fio: this.driver.fio,
      rate: this.driver.rate,
      status: this.driver.status
    };
  }

  public saveDriver(tempDriver) {
    this.driversService.editDriver(tempDriver).subscribe(() => {
      this.bsModalRef.hide();
    });
  }

}
