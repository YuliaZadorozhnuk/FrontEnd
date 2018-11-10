import {Component, OnInit} from '@angular/core';
import {RequisitionService} from './requisition.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DriversService} from '../drivers/drivers.service';
import {Distance, Driver} from '../entry-requisition/entry-requisition.model';

@Component({
  selector: 'app-requisition',
  templateUrl: './requisition.component.html',
  styleUrls: ['./requisition.component.css']
})
export class RequisitionComponent implements OnInit {

  requisition: any;
  id: number;
  drivers: Driver[] = [];
  allDrivers: Driver[] = [];
  procExp = 1.2;

  constructor(private requisitionService: RequisitionService, private route: ActivatedRoute,
              private driversService: DriversService, private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.driversService.getAllDrivers().subscribe((response: Driver[]) => {
      this.allDrivers = response;
      this.drivers = response.filter(el => el.status === 1);
      this.getRequisitionById(this.id);
    });
  }

  public getRequisitionById(id) {
    this.requisitionService.getRequisitionById(id).subscribe(responce => {
      this.requisition = responce;
    });
  }

  public getCostOfRequisition(event?) {
    this.requisitionService.getDistance(this.requisition.entryRequisitionByIdEntryRequisition.cityByIdCityZ,
      this.requisition.entryRequisitionByIdEntryRequisition.cityByIdCityR).subscribe((response: Distance) => {
        this.requisition.idDistance = response.id;
        const distance = response.distance;
        let rate;
        this.drivers.filter(l => l.id === Number(this.requisition.idDriver)).forEach(el => {
          rate = el.rate;
        });
        this.requisition.cost = (this.procExp * rate * distance).toFixed(2);
      }
    );
  }

  public acceptRequisition() {
    this.requisitionService.acceptRequisition(this.requisition).subscribe(() => {
      this.router.navigate(['entry-requisition']);
    });
  }

}
