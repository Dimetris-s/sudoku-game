import { Cell } from './Cell';

export class Board {
  board: Cell[][];

  constructor() {
    this.board = this.initBoard();
  }

  private initBoard() {
    return [[new Cell({value: 1, state: 'filled'})]]
  }
}
