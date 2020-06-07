import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Mahjong';
  min = 1;
  max = 4;
  selectedCell = [];
  pairNumber = [];
  cardsFind = [];
  cardsNumber = [...Array(this.max).fill(0).map((_, i) => i + 1), ...Array(this.max).fill(0).map((_, i) => i + 1)];

  ngOnInit(): void {
    this.randsNumber();
  }

  randsNumber() {
    this.cardsNumber = [...Array(this.max).fill(0).map((_, i) => i + 1), ...Array(this.max).fill(0).map((_, i) => i + 1)];
    // simple shuffle array
    // this.cardsNumber.sort(() => Math.random() - 0.5);
    // Fisher–Yates shuffle
    for (let i = this.cardsNumber.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + this.min));
      [this.cardsNumber[i], this.cardsNumber[j]] = [this.cardsNumber[j], this.cardsNumber[i]];
    }
  }

  trackByFn(index, item) {
    return index; // or item.id
  }

  compareCouple(n: number) {
    return this.cardsFind.some((i) => i === n);
  }

  /**
   * Countdown timer
   */
  timer() {
    /**
     * code here ...
     */
  }

  /**
   * Start counting down until game over
   */
  initTimer() {
    /**
     * code here ...
     */
  }

  /**
   * Start the game
   */
  startGame() {
    /**
     * code here ...
     * add simple animation
     */
  }

  /**
   * Make a cell selected
   *
   * @param {number} cellId     The id of the cell to select
   */
  makeSelected([num, i]) {
    if (this.selectedCell.length) {
      if (this.selectedCell[0] === num) {
        this.cardsFind.push(num);
      }
      this.selectedCell = [];
      this.pairNumber = [];
    } else {
      this.selectedCell.push(num, i);
      this.pairNumber.push(num);
    }
  }

  /**
   * Create "New Game"
   */
  createNewGame() {
    this.selectedCell = [];
    this.pairNumber = [];
    this.cardsFind = [];
    this.randsNumber();
  }
}
