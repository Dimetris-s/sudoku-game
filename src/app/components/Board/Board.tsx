import React, { FC } from 'react';
import { Board as BoardModel } from '../../models/Board';
import styles from './Board.module.scss';

interface BoardProps {
  board: BoardModel;
}

export const Board: FC<BoardProps> = ({ board }) => {
  return (
    <table className={styles.root}>
      <tbody>
        {board.board.map((row, idx) => {
          return <tr key={idx} className={styles.row}>
            {row.map((cell, idx) => <td className={styles.cell} key={idx}>{cell.value}</td>)}
          </tr>;
        })}
      </tbody>
    </table>
  );
};
