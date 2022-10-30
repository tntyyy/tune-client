import React, { FC } from "react";
import { Link } from "react-router-dom";

import { INavigationRoute } from "@/types/route";

import styles from "./NavigationLink.module.scss";

const NavigationLink: FC<INavigationRoute> = ({ icon, path, altName }) => {
    return (
        <Link to={path} className={styles.link}>
            <img src={icon} alt={altName} />
        </Link>
    );
};

export default NavigationLink;
