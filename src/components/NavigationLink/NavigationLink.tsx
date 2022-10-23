import React, { FC } from 'react';
import styles from './NavigationLink.module.scss';
import {INavigationRoute} from "@/types/route";
import {Link} from "react-router-dom";

const NavigationLink: FC<INavigationRoute> = ({icon, path, altName}) => {
  return (
      <Link to={path} className={styles.link}>
          <img src={icon} alt={altName}/>
      </Link>
  );
};

export default NavigationLink;
