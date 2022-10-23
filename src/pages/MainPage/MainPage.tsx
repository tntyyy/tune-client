import React, { FC } from 'react';
import styles from './MainPage.module.scss';
import Navigation from "@/containers/Navigation/Navigation";
import {navigationLinks} from "@/utils/navigation";

const MainPage: FC = () => {

  return (
      <Navigation links={navigationLinks}/>
  );
};

export default MainPage;
