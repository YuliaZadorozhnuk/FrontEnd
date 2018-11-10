import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EntryRequisitionService {

  constructor(private http: HttpClient) {
  }

  public getEntryRequisition() {
    return this.http.get('http://localhost:8080/entry-requisition');
  }

  public getAllCities() {
    return this.http.get('http://localhost:8080/entry-requisition/city');
  }

  public getAllSources() {
    return this.http.get('http://localhost:8080/entry-requisition/source');
  }

  public saveRequisition(requisition) {
    return this.http.post('http://localhost:8080/entry-requisition/save', requisition);
  }

}
