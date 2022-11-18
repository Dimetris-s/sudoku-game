import React, { FC } from 'react';
import { Board as BoardModel } from '../../models/Board';

interface BoardProps {
  board: BoardModel;
}
export const Board: FC<BoardProps> = ({ board }) => {
  console.log(board.board);
  return (
    <div>

    </div>
  );
};
