import {Component, OnInit, TemplateRef} from '@angular/core';
import {UsersService} from '../users/users.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {Router} from '@angular/router';
import {User} from '../entry-requisition/entry-requisition.model';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  login: string;
  password: string;
  user: User;

  modalRef: BsModalRef;

  constructor(private usersService: UsersService, private modalService: BsModalService, private router: Router) {
  }

  ngOnInit() {
  }

  public authorization(auth: TemplateRef<any>) {
    const user = {
      login: this.login,
      password: this.password
    };
    this.usersService.authorization(user).subscribe((response: User) => {
        if (response == null) {
          this.openModal(auth);
        } else {
          this.user = response;
          if (this.user.status === 1) {
            this.usersService.addUserInLocalStorage(this.user);
            if (this.user.role === 1) {
              this.router.navigate(['/users']);
            } else if (this.user.role === 2) {
              this.router.navigate(['/entry-requisition']);
            } else {
              this.router.navigate(['/create-requisition']);
            }
          } else {
            this.openModal(auth);
          }
        }
      }
    );
  }

  openModal(auth: TemplateRef<any>) {
    this.modalRef = this.modalService.show(auth);
  }

}
