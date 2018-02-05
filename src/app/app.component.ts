import { Component, ViewEncapsulation, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'app';
  counter: number[] = [];

  onGameStarted(inputData: {counter: number}) {
    this.counter.push(inputData.counter);
  }
  onGameStopped(inputData: {ref: any}) {
    clearInterval(inputData.ref);
  }
}
