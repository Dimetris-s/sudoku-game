import React, { FC, ReactNode } from 'react';
import styles from './MainLayout.module.scss';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className={styles.root}>
      {children}
    </div>
  );
};
