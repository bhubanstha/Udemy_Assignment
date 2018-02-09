import { Component, OnInit, Input } from '@angular/core';
import { User } from '../shared/user';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css']
})
export class ActiveComponent implements OnInit {

  constructor(private userService: User) { }
  @Input() users:  [{Id: Number, Name: string, ClickCount: number, Status: boolean}];
  ngOnInit() {
  }

  onInactive(id: number) {
    console.log(id);
    this.userService.onUserUpdate(id, false);
  }

}
