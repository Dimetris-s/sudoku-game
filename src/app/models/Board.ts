import { Cell, CellValue } from './Cell';
import { getRandomArrayElement } from '../utils/rnd';
import { Position } from './Position';

export class Board {
  board: Cell[][];
  private static MAX_INDEX: 8;
  private static cellValues: CellValue[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  constructor() {
    this.board = this.initBoard();
  }

  private static createEmptyBoard(): Cell[][] {
    return new Array(9).fill(new Array(9).fill(null));
  }

  private static generateRandomCell(board: (null | Cell)[][], p: Position): Cell {
    const availableNumbers: CellValue[] = [];
    const cellValue = getRandomArrayElement(availableNumbers);

    return new Cell({ value: cellValue });
  }

  private initBoard() {
    const board = Board.createEmptyBoard();
    for(let y = 0; y < board.length; y++) {
      for(let x = 0; x < board[y].length; x++) {
        const position = new Position({ x, y, max: Board.MAX_INDEX });
        const cell = Board.generateRandomCell(board, position);
        board[y][x] = cell;
      }
    }
    return board;
  }
}

/*
 *
 */
