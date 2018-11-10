import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {User} from '../entry-requisition/entry-requisition.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient, public router: Router) { }

  public getAllUsers() {
    return this.http.get('http://localhost:8080/users');
  }

  public setStatus(user) {
    return this.http.post('http://localhost:8080/users/status', user);
  }

  public editUser(user) {
    return this.http.post('http://localhost:8080/users/edit-user', user);
  }

  public saveUser(user) {
    return this.http.post('http://localhost:8080/users/save-user', user);
  }

  public deleteUser(id) {
    return this.http.delete('http://localhost:8080/users/delete/' + id);
  }

  public authorization(user) {
    return this.http.post('http://localhost:8080/users/authorization', user);
  }

  public addUserInLocalStorage(user) {
    const store = JSON.stringify(user);
    localStorage.setItem('user', store);
  }

  public getUserFromLocalStorage() {
    return JSON.parse(localStorage.getItem('user')) as User;
  }

  public logOut() {
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }

  public logOutU() {
    localStorage.removeItem('user');
    this.router.navigate(['/authorization']);
  }

  public isAuthorization() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user != null) {
      return true;
    } else {
      return false;
    }
  }

  public goToOrder() {
    if (this.isAuthorization()) {
      this.router.navigate(['/create-requisition']);
    } else {
      this.router.navigate(['/authorization']);
    }
  }

}
