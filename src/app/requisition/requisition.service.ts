import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequisitionService {

  constructor(private http: HttpClient) {
  }

  public getAllRequisitions() {
    return this.http.get('http://localhost:8080/requisition');
  }

  public getRequisitionById(id) {
    return this.http.get('http://localhost:8080/requisition/' + id);
  }

  public saveRequisitionWithId(id) {
    return this.http.get('http://localhost:8080/requisition/save/' + id);
  }

  public getRequsitionByIdUser(idUser) {
    return this.http.get('http://localhost:8080/requisition/user/' + idUser);
  }

  public getDistance(cityZ, cityR) {
    return this.http.post('http://localhost:8080/requisition/distance', {cityZ, cityR});
  }

  public acceptRequisition(requisition) {
    return this.http.post('http://localhost:8080/requisition/accept', requisition);
  }

}
