import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OddComponent implements OnInit {

  @Input() countDownNumber: number;
  constructor() { }

  ngOnInit() {
  }

}
