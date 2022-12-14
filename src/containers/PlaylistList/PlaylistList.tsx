import React, { FC } from "react";

import Playlist from "@/components/Playlist/Playlist";

import { IPlaylist } from "@/types/playlist";

import styles from "./PlaylistList.module.scss";

interface IPlaylistListProps {
    playlists: IPlaylist[];
}

const PlaylistList: FC<IPlaylistListProps> = ({ playlists }) => {
    return (
        <section className={styles.playlists}>
            <h2 className={styles.title}>Playlist for you</h2>
            <div className={styles.wrapper}>
                {playlists.map((item) => (
                    <Playlist
                        id={item.id}
                        name={item.name}
                        cover={item.cover}
                        author={item.author}
                        numberOfTracks={item.numberOfTracks}
                        key={item.id}
                    />
                ))}
            </div>
        </section>
    );
};

export default PlaylistList;
