import { Component, OnInit } from '@angular/core';
import {DriversService} from '../drivers/drivers.service';
import {Router} from '@angular/router';
import {UsersService} from '../users/users.service';

@Component({
  selector: 'app-driver-add',
  templateUrl: './driver-add.component.html',
  styleUrls: ['./driver-add.component.css']
})
export class DriverAddComponent implements OnInit {

  fio: string;
  rate: number;

  constructor(private driverService: DriversService, private router: Router, private userService: UsersService) {
  }

  ngOnInit() {
    if (!this.userService.isAuthorization()) {
      this.router.navigate(['/']);
    }
  }

  public addDriver() {
    const driver = {
      fio: this.fio,
      rate: this.rate
    };
    this.driverService.saveDriver(driver).subscribe(() => {
      this.router.navigate(['/drivers']);
    });
  }

}
