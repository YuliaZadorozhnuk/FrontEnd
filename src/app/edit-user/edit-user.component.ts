import {Component, Input, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';
import {UsersService} from '../users/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  @Input() users;
  @Input() user;
  tempUser;

  constructor(public bsModalRef: BsModalRef, private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.tempUser = {
      id: this.user.id,
      name: this.user.name,
      role: this.user.role,
      login: this.user.login,
      password: this.user.password,
      status: this.user.status
    };
  }

  public saveForwarder(tempUser) {
    this.usersService.editUser(tempUser).subscribe( () => {
      this.bsModalRef.hide();
    });
  }
}
