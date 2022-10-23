import React, { FC } from 'react';
import styles from './Navigation.module.scss';
import {INavigationRoute} from "@/types/route";
import NavigationLink from "@/components/NavigationLink/NavigationLink";
import Logo from "@/components/Logo/Logo";

interface INavigationProps {
    links: INavigationRoute[];
}

const Navigation: FC<INavigationProps> = ({links}) => {

  return (
      <nav className={styles.nav}>
          <Logo />
          {
              links.map(link => (
                  <NavigationLink
                    id={link.id}
                    path={link.path}
                    altName={link.altName}
                    icon={link.icon}
                    key={link.id}
                  />
              ))
          }
      </nav>
  );
};

export default Navigation;
