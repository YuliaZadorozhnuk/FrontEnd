import {Component, OnInit} from '@angular/core';
import {RequisitionService} from '../requisition/requisition.service';
import {EntryRequisition} from '../entry-requisition/entry-requisition.model';
import {UsersService} from '../users/users.service';

@Component({
  selector: 'app-view-requisition',
  templateUrl: './view-requisition.component.html',
  styleUrls: ['./view-requisition.component.css']
})
export class ViewRequisitionComponent implements OnInit {

  requisitionsUser: any = [];

  constructor(private requisitionService: RequisitionService, public userService: UsersService) {
  }

  ngOnInit() {
    this.getAllRequisitionsByIdUser(this.userService.getUserFromLocalStorage().id);
  }

  public getAllRequisitionsByIdUser(idUser) {
    this.requisitionService.getRequsitionByIdUser(idUser).subscribe(response => {
      this.requisitionsUser = response;
    });
  }

}
