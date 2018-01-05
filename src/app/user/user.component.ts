import { Component, OnInit, transition } from '@angular/core';
import { setInterval } from 'timers';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  isUserNameValid: Boolean = false;
  userName: String = '';
  constructor() { }

  ngOnInit() {
    setInterval(() => {
        if (this.userName.length > 0) {
          this.isUserNameValid = true;
        }
    }, 500);
  }

  onResetUser() {
    this.userName = '';
    this.isUserNameValid = false;
  }
}
