import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { transition } from '@angular/core/src/animation/dsl';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GameControlComponent implements OnInit {

counter: number = 0;
ref: any;
  gameStarted: boolean = false;
  constructor() { }

  @Output() gameStart = new EventEmitter< {counter: number }>();
  @Output() gameStopped = new EventEmitter< { ref: any } >();

  ngOnInit() {
  }
  onGameStartClick() {
    this.gameStarted = true;
      this.ref = setInterval(() => {
        this.counter = this.counter + 1;
        console.log(this.counter);
        this.gameStart.emit({
          counter: this.counter
        });
      }, 1000);
  }
  onGameStopClick() {
    this.gameStarted = false;
    this.gameStopped.emit({
      ref: this.ref
    });
  }
}
