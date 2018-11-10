import {Component, OnInit, TemplateRef} from '@angular/core';
import {UsersService} from '../users/users.service';
import {Router} from '@angular/router';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  login = '';
  password = '';
  isCorrectLogin;
  modalRef: BsModalRef;

  constructor(private usersService: UsersService, private router: Router,
              private modalService: BsModalService) {
  }

  ngOnInit() {
  }

  public registrationClient(auth: TemplateRef<any>) {
    const user = {
      login: this.login,
      password: this.password
    };
    if (this.login.length < 4 || this.password.length < 4) {
      this.openModal(auth);
    } else {
      this.usersService.saveUser(user).subscribe(response => {
        this.isCorrectLogin = response;
        if (this.isCorrectLogin) {
          this.router.navigate(['authorization']);
        } else {
          this.openModal(auth);
        }
      });
    }
  }

  openModal(auth: TemplateRef<any>) {
    this.modalRef = this.modalService.show(auth);
  }

}
