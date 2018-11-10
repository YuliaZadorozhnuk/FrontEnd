import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {EntryRequisition} from '../entry-requisition/entry-requisition.model';
import {EntryRequisitionService} from '../entry-requisition/entry-requisition.service';
import {Router} from '@angular/router';
import {RequisitionService} from '../requisition/requisition.service';
import {UsersService} from '../users/users.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';

@Component({
  selector: 'app-create-requisition',
  templateUrl: './create-requisition.component.html',
  styleUrls: ['./create-requisition.component.css']
})
export class CreateRequisitionComponent implements OnInit {

  entryRequisition = new EntryRequisition();
  cities: any = [];
  sources: any = [];
  distance = {};
  modalRef: BsModalRef;

  @ViewChild('createRequisition') createRequisition;

  constructor(public entryRequisitionService: EntryRequisitionService,
              private router: Router, private userService: UsersService,
              public requisitionService: RequisitionService, private modalService: BsModalService) {
  }

  ngOnInit() {
    if (this.userService.isAuthorization()) {
      this.entryRequisitionService.getAllCities().subscribe(response => {
        this.cities = response;
      });
      this.entryRequisitionService.getAllSources().subscribe(response => {
        this.sources = response;
      });
    } else {
      this.router.navigate(['/']);
    }
  }

  public addRequisition(auth: TemplateRef<any>) {
    this.entryRequisition.idUser = this.userService.getUserFromLocalStorage().id;
    if (this.createRequisition.invalid) {
      this.openModal(auth);
    } else {
      this.entryRequisitionService.saveRequisition(this.entryRequisition).subscribe(() => {
        this.router.navigate(['/view-requisition']);
      }
      );
    }
  }

  openModal(auth: TemplateRef<any>) {
    this.modalRef = this.modalService.show(auth);
  }

  public checkValidDate() {
    if (this.entryRequisition.dateZ < this.entryRequisition.dateR) {
      return false;
    } else {
      return true;
    }
  }

  public checkValidCity() {
    if (this.entryRequisition.idCityZ !== this.entryRequisition.idCityR) {
      return false;
    } else {
      return true;
    }
  }

}
