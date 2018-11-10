import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users/users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  name: string;
  login: string;
  password: string;

  constructor(private userService: UsersService, private router: Router) { }

  ngOnInit() {
  }

  public addForwarder() {
    const forwarder = {
      name: this.name,
      login: this.login,
      password: this.password
    };
    this.userService.saveUser(forwarder).subscribe(() => {
      this.router.navigate(['/users']);
    });
  }

}
