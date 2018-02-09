import { Component, OnInit, Output } from '@angular/core';
import { User } from './Model/user';
import { UserService } from './Services/User.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  users: User[];
  @Output() inactiveUsers: User[];
  @Output() activeUsers: User[];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.Users;
    this.activeUsers = this.users.filter(function(el) {
      return el.Status === true;
    });

    this.inactiveUsers = this.users.filter(function(el) {
      return el.Status === false;
    });
  }
}
