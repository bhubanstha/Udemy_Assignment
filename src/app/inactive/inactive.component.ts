import { Component, OnInit, Input } from '@angular/core';
import { User } from '../Model/user';
import { UserService } from '../Services/User.service';

@Component({
  selector: 'app-inactive',
  templateUrl: './inactive.component.html',
  styleUrls: ['./inactive.component.css']
})
export class InactiveComponent implements OnInit {

  @Input() users: User[];

  constructor(private userService: UserService) {
    this.userService.onUserStatusChanged.subscribe((status: string) => this.users = this.userService.Users.filter(function(el) {
      return el.Status === false;
    }));
  }

  ngOnInit() {
  }

  onInactive(id: number) {
    this.userService.onUserUpdate(id, true);
    this.userService.onUserStatusChanged.emit(true);
  }


}
