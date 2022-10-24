import React, { FC } from "react";
import styles from "./SearchPanel.module.scss";

const SearchPanel: FC = () => {
    return (
        <div className={styles.search}>
            <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle
                    cx="12"
                    cy="12.5"
                    r="10.5"
                    stroke="white"
                    strokeWidth={3}
                />
            </svg>
            <input type="text" placeholder={"Search..."} />
        </div>
    );
};

export default SearchPanel;
