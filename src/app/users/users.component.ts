import {Component, OnInit} from '@angular/core';
import {UsersService} from './users.service';
import {EditUserComponent} from '../edit-user/edit-user.component';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  bsModalRef: BsModalRef;

  users: any = [];

  constructor(public usersService: UsersService, private modalService: BsModalService) {
  }

  ngOnInit() {
    this.getAllUsers();
  }

  public editUser(user) {
    const initialState = {
      user: user,
      users: this.users
    };
    this.bsModalRef = this.modalService.show(EditUserComponent, {initialState});
    this.modalService.onHide.subscribe(() => {
      this.getAllUsers();
    });
  }

  public getAllUsers() {
    this.usersService.getAllUsers().subscribe(response => {
      this.users = response;
    });
  }

  public BlockUnblockUser(user) {
    this.usersService.setStatus(user).subscribe(response => {
      this.getAllUsers();
    });
  }

  public deleteForwarder(id) {
    this.usersService.deleteUser(id).subscribe(() => {
      this.getAllUsers();
    });
  }

}
