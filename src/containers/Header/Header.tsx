import React, { FC } from 'react';
import styles from './Header.module.scss';
import SearchPanel from "@/components/SearchPanel/SearchPanel";

interface HeaderProps {}

const Header: FC<HeaderProps> = (props) => {

  return (
      <header className={styles.header}>
          <SearchPanel />
          <span>user</span>
      </header>
  );
};

export default Header;
