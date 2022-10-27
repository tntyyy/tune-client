import React, { FC } from "react";
import styles from "./UserPanel.module.scss";
import { Link } from "react-router-dom";
import defaultUserPic from "@/assets/images/defaultUserPic.svg";
import { AppRoutesEnum } from "@/routes/types";

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
