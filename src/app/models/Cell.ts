type CellState = 'clear' | 'filled' | 'correct' | 'incorrect';
type CellValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

type CellOptions = {
  value: CellValue;
  state: CellState;
}

export class Cell {
  value: CellValue;
  state: CellState;
  guessValue: CellValue | null = null;
  isActive: boolean = false;
  isBlocked: boolean = false;

  constructor({ value, state }: CellOptions) {
    this.value = value;
    this.state = state;
  }

  public clear() {
    if(this.isBlocked) return;
    this.guessValue = null;
    this.state = 'clear';
  }

  public setValue(value: CellValue) {
    if(this.isBlocked) return;

    this.guessValue = value;
    if(this.guessValue === this.value) {
      this.state = 'correct';
      this.isBlocked = true;
    } else {
      this.state = 'incorrect';
    }
  }

  public setActive(bool: boolean) {
    this.isActive = bool;
  }

}
