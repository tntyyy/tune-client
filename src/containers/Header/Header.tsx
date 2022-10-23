import React, { FC } from 'react';
import styles from './Header.module.scss';
import SearchPanel from "@/components/SearchPanel/SearchPanel";
import UserPanel from "@/components/UserPanel/UserPanel";

const Header: FC = () => {

  return (
      <header className={styles.header}>
          <SearchPanel />
          <UserPanel />
      </header>
  );
};

export default Header;
