import React from 'react';
import { MainLayout } from './Layouts/MainLayout';
import { Board as BoardComponent } from './components/Board';
import { Board } from './models/Board';


export const App = () => {
  const board = new Board();
  return (
    <MainLayout>
      <BoardComponent board={board}/>
    </MainLayout>
  );
};
