import React, { FC } from 'react';
import styles from './MainPage.module.scss';
import Navigation from "@/containers/Navigation/Navigation";
import {navigationLinks} from "@/utils/navigation";
import Header from "@/containers/Header/Header";

const MainPage: FC = () => {

  return (
      <main className={styles.main}>
        <Navigation links={navigationLinks}/>
        <div className={styles.content}>
          <Header />
          <section>sec1</section>
          <section>sec2</section>
        </div>
      </main>
  );
};

export default MainPage;
