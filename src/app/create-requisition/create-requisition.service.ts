import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateRequisitionService {

  constructor(private http: HttpClient) { }

  public createRequisition(requisition) {
    return this.http.post('http://localhost:8080/entry-requisition/create', requisition);
  }

}
