import { Component, OnInit } from '@angular/core';
import {EntryRequisitionService} from './entry-requisition.service';
import {RequisitionService} from '../requisition/requisition.service';
import {UsersService} from '../users/users.service';

@Component({
  selector: 'app-entry-requisition',
  templateUrl: './entry-requisition.component.html',
  styleUrls: ['./entry-requisition.component.css']
})
export class EntryRequisitionComponent implements OnInit {

  requisition: any = [];

  constructor(public requisitionService: RequisitionService, public usersService: UsersService) { }

  ngOnInit() {
    this.getRequisition();
  }

  public getRequisition() {
    this.requisitionService.getAllRequisitions().subscribe(response => {
      this.requisition = response;
    });
  }

}
