import React, { FC, useState } from "react";
import { Link } from "react-router-dom";

import { IPlaylist } from "@/types/playlist";

import pauseIcon from "@/assets/icons/pause.svg";
import playIcon from "@/assets/icons/play.svg";

import styles from "./Playlist.module.scss";

const Playlist: FC<IPlaylist> = ({
    id,
    name,
    cover,
    author,
    numberOfTracks,
}) => {
    const [isPlay, setIsPlay] = useState<boolean>(false);

    const handlePlayClick = (event: React.MouseEvent) => {
        event.stopPropagation();
        event.preventDefault();
        setIsPlay(!isPlay);
    };
    return (
        <Link
            to={`/playlist/${id}`}
            className={styles.playlist}
            style={{
                background: `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("${cover}")`,
            }}
        >
            <span>{numberOfTracks} tracks</span>

            <div className={styles.play}>
                <img
                    onClick={handlePlayClick}
                    src={isPlay ? pauseIcon : playIcon}
                    alt="Handle play track"
                />
                <div className={styles.info}>
                    <p>{name}</p>
                    <span>{author}</span>
                </div>
            </div>
        </Link>
    );
};

export default Playlist;
