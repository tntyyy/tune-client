import React, { FC } from "react";

import LikeButton from "@/components/ui/LikeButton/LikeButton";

import { addZeroToTheBeginOfTheNumber } from "@/utils/addZeroToTheBeginOfTheNumber";
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
                <span className={styles.position}>
                    {addZeroToTheBeginOfTheNumber(position + 1)}
                </span>
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
                <LikeButton onLikeClick={() => console.log("like")} />
            </div>
        </div>
    );
};

export default Track;
