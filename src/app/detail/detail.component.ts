import { Component, OnInit, ViewEncapsulation, AfterViewInit, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { Person } from '../../model/person.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DetailComponent implements OnInit, AfterViewChecked {
  windowHeight: number;
  documentHeight: number;
  person: Person = new Person();
  constructor(private cd: ChangeDetectorRef) { }
  ngOnInit() {
    this.windowHeight = 800;
    this.person.Title = 'Mr';
    this.person.Name = 'Bhuban';
    this.person.Image = 'https://yt3.ggpht.com/-xt3naS6IcpM/AAAAAAAAAAI/AAAAAAAAAAA/GtAV3uZ7STk/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg';
  }

  ngAfterViewChecked() {
    this.windowHeight =  window.innerHeight - 50;
    const pageContent = document.getElementById('page-wrapper');
    if (pageContent != null) {
      this.documentHeight = pageContent.clientHeight;
      console.log('Document Height ' + this.documentHeight);
      if (this.windowHeight <= this.documentHeight) {
        this.windowHeight = this.windowHeight + 30;
      }
      console.log('Window height ' + this.windowHeight);
    }
    this.cd.detectChanges();
  }

}
