import React, { FC } from "react";

import { secondsToReadableTimeFormat } from "@/utils/secondsToReadableTimeFormat";

import { ITrack } from "@/types/track";

import styles from "./Track.module.scss";

interface TrackProps extends ITrack {
    position: number;
}

const Track: FC<TrackProps> = ({
    name,
    author,
    cover,
    position,
    trackLength,
}) => {
    return (
        <div className={styles.track}>
            <div className={styles.left}>
                <span className={styles.position}>0{position + 1}</span>
                <img src={cover} alt="Cover" />
                <div className={styles.info}>
                    <span>{name}</span>
                    <span>Mixtape</span>
                </div>
            </div>
            <span className={styles.author}>{author}</span>
            <div className={styles.right}>
                <span className={styles.length}>
                    {secondsToReadableTimeFormat(trackLength)}
                </span>
                <svg
                    width="26"
                    height="22"
                    viewBox="0 0 26 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M2.17818 4.72238C2.46087 4.03992 2.87521 3.41982 3.39755 2.89749C3.91988 2.37515 4.53998 1.96081 5.22244 1.67812C5.9049 1.39544 6.63636 1.24994 7.37505 1.24994C8.11374 1.24994 8.8452 1.39544 9.52766 1.67812C10.2101 1.96081 10.8302 2.37515 11.3525 2.89749L13 4.54499L14.6475 2.89749C15.7024 1.84259 17.1332 1.24995 18.625 1.24995C20.1169 1.24995 21.5476 1.84259 22.6025 2.89749C23.6574 3.95239 24.2501 5.38314 24.2501 6.87499C24.2501 8.36684 23.6574 9.79759 22.6025 10.8525L13 20.455L3.39755 10.8525C2.87521 10.3302 2.46087 9.71006 2.17818 9.0276C1.8955 8.34514 1.75 7.61368 1.75 6.87499C1.75 6.1363 1.8955 5.40484 2.17818 4.72238Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
        </div>
    );
};

export default Track;
