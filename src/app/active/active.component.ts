import { Component, OnInit, Input } from '@angular/core';
import { User } from '../Model/user';
import { UserService } from '../Services/User.service';


@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css']
})
export class ActiveComponent implements OnInit {

  @Input() users: User[];

  constructor(private userService: UserService) {
    this.userService.onUserStatusChanged.subscribe((status: string) => this.users = this.userService.Users.filter(function(el) {
      return el.Status === true;
    }));
  }

  ngOnInit() {
  }

  onInactive(id: number) {
    this.userService.onUserUpdate(id, false);
    this.userService.onUserStatusChanged.emit(true);
  }

}
