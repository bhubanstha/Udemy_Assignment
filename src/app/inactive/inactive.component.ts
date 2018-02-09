import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inactive',
  templateUrl: './inactive.component.html',
  styleUrls: ['./inactive.component.css']
})
export class InactiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() users:  [{Id: Number, Name: string, ClickCount: number, Status: boolean}];

}
