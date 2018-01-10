import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  ButtonText: String = 'Display Details';
  isSecretVisible: Boolean = false;
  clickCount: number = 0;
  clickTimeStamps: Date[] = [];
  constructor() { }

  ngOnInit() {
  }

  onSecretClick() {
    this.isSecretVisible = !this.isSecretVisible;
    this.clickCount = this.clickCount + 1;
    this.clickTimeStamps.push(new Date());
    this.ButtonText = this.isSecretVisible ? 'Hide Details' : 'Display Details';
  }

  getBackgroundColor() {
    return this.clickCount >= 5 ? 'blue' : 'transparent';
  }
}
