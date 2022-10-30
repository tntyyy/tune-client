import React, { FC } from "react";
import { Link } from "react-router-dom";

import { AppRoutesEnum } from "@/routes/types";

import defaultUserPic from "@/assets/images/defaultUserPic.svg";

import styles from "./UserPanel.module.scss";

const UserPanel: FC = () => {
    return (
        <div className={styles.user}>
            <Link to={AppRoutesEnum.SIGNUP}>
                <img src={defaultUserPic} alt="User" />
            </Link>
        </div>
    );
};

export default UserPanel;
