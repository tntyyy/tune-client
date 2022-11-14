import React, { FC } from "react";
import { Link } from "react-router-dom";

import PlayButton from "@/components/ui/PlayButton/PlayButton";

import { IPlaylist } from "@/types/playlist";

import styles from "./Playlist.module.scss";

const Playlist: FC<IPlaylist> = ({
    id,
    name,
    cover,
    author,
    numberOfTracks,
}) => {
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
                <PlayButton onPlayClick={() => console.log("click")} />
                <div className={styles.info}>
                    <p>{name}</p>
                    <span>{author}</span>
                </div>
            </div>
        </Link>
    );
};

export default Playlist;
