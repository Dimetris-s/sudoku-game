import { Cell, CellValue } from './Cell';
import { getRandomArrayElement } from '../utils/rnd';

export class Board {
  board: Cell[][];
  numbers: CellValue[] = [1,2,3,4,5,6,7,8,9]

  constructor() {
    this.board = this.initBoard();
  }

  private initBoard() {
    const board = new Array(9).fill(new Array(9).fill(new Cell({ value: getRandomArrayElement(this.numbers) as CellValue })));
    return board;
  }
}
