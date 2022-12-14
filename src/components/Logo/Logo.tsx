import React, { FC } from "react";
import { Link } from "react-router-dom";

// import styles from './Logo.module.scss';
import { NavigationRoutes } from "@/types/route";

import logoIcon from "@/assets/icons/logo.svg";

const Logo: FC = () => {
    return (
        <Link to={NavigationRoutes.HOME}>
            <img src={logoIcon} alt="Logotype" />
        </Link>
    );
};

export default Logo;
