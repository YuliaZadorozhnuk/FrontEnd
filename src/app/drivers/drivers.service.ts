import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DriversService {

  constructor(private http: HttpClient) {
  }

  public setStatus(driver) {
    return this.http.post('http://localhost:8080/drivers/status', driver);
  }

  public getAllDrivers() {
    return this.http.get('http://localhost:8080/drivers');
  }

  public deleteDriver(id) {
    const url = 'http://localhost:8080/drivers/delete/' + id;
    return this.http.delete(url);
  }

  public saveDriver(driver) {
    return this.http.post('http://localhost:8080/drivers/save-driver', driver);
  }

  public editDriver(driver) {
    return this.http.post('http://localhost:8080/drivers/edit-driver', driver);
  }

}
