import React, { FC } from "react";

import SearchPanel from "@/components/SearchPanel/SearchPanel";
import UserPanel from "@/components/UserPanel/UserPanel";

import styles from "./Header.module.scss";

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <SearchPanel />
            <UserPanel />
        </header>
    );
};

export default Header;
