import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent implements OnInit {
  currentYear: number;
  constructor() { }

  ngOnInit() {
    const date = new Date();
    this.currentYear = date.getFullYear();
  }

}
