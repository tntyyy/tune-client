import React, { FC } from "react";

import { IPlaylist } from "@/types/playlist";

import playIcon from "@/assets/icons/play.svg";

import styles from "./AlbumOfWeek.module.scss";

interface IAlbumOfWeekProps {
    album: IPlaylist;
}

const AlbumOfWeek: FC<IAlbumOfWeekProps> = ({ album }) => {
    return (
        <div className={styles.album}>
            <h3>Album of the week</h3>
            <div className={styles.content}>
                <img src={album.cover} alt="Album cover" />
                <div className={styles.bottom}>
                    <div className={styles.info}>
                        <h4>{album.name}</h4>
                        <span>{album.author}</span>
                    </div>
                    <img src={playIcon} alt="Play album button" />
                </div>
            </div>
        </div>
    );
};

export default AlbumOfWeek;
