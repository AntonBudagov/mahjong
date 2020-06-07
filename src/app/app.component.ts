import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Mahjong';
  min = 1;
  max = 15;
  starting = false;
  selectedNumber = [];
  pairSelectedNumber = [];
  allPair = [];
  cardsNumber = Array(50).fill(0).map((_, i) => i + 1);
  initGame = [];

  ngOnInit(): void {
    this.startGame();
  }

  /**
   *  1) fill number from 1 to 50
   *  2) rand position
   */
  randsNumber(arr: Array<number>) {
    // simple shuffle array
    // this.cardsNumber.sort(() => Math.random() - 0.5);
    // Fisher–Yates shuffle
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + this.min));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  trackByFn(index) {
    return index; // or item.id
  }

  // show all pair numbers
  compareCouple(n: number) {
    return this.allPair.some((i) => i === n);
  }

  /**
   * Start the game
   */
  startGame() {
    /**
     * take rand array
     * slice first 15 elements
     * concat two half Array
     * rand again
     */
    const halfArray = this.randsNumber(this.cardsNumber).slice(0, this.max);
    this.initGame = this.randsNumber([...halfArray, ...halfArray]);
    this.starting = true;
    setTimeout(() => {
      this.starting = false;
    }, 5000);
  }

  /**
   *
   * @param num number card
   * @param i index card
   */
  makeSelected([num, i]) {
    if (this.selectedNumber.length) {
      if (this.selectedNumber[0] === num) {
        this.allPair.push(num);
      }
      // todo angular animation
      this.selectedNumber.push(num, i);
      setTimeout(() => {
        this.selectedNumber = [];
        this.pairSelectedNumber = [];
      }, 500);
    } else {
      this.selectedNumber.push(num, i);
      this.pairSelectedNumber.push(num);
    }
  }

  /**
   * Create "New Game"
   */
  createNewGame() {
    this.selectedNumber = [];
    this.pairSelectedNumber = [];
    this.pairSelectedNumber = [];
    this.initGame = [];
    this.startGame();
  }
}
