import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  selectedFeature: string = 'recipe';
  OnMenuClick(feature: string) {
    this.selectedFeature = feature;
  }
}
