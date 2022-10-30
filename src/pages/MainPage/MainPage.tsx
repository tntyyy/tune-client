import React, { FC } from "react";

import AlbumOfWeek from "@/components/AlbumOfWeek/AlbumOfWeek";

import Header from "@/containers/Header/Header";
import Navigation from "@/containers/Navigation/Navigation";
import PlaylistList from "@/containers/PlaylistList/PlaylistList";
import TrackList from "@/containers/TrackList/TrackList";

import { navigationLinks } from "@/utils/navigation";
import { mockPlaylists } from "@/utils/playlists";
import { mockTracks } from "@/utils/tracks";

import styles from "./MainPage.module.scss";

const MainPage: FC = () => {
    return (
        <main className={styles.main}>
            <Navigation links={navigationLinks} />
            <div className={styles.content}>
                <Header />
                <PlaylistList playlists={mockPlaylists} />
                <div className={styles.wrapper}>
                    <TrackList tracks={mockTracks} />
                    <AlbumOfWeek album={mockPlaylists[0]} />
                </div>
            </div>
        </main>
    );
};

export default MainPage;
