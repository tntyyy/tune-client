import React, { FC } from "react";
import styles from "./MainPage.module.scss";
import Navigation from "@/containers/Navigation/Navigation";
import { navigationLinks } from "@/utils/navigation";
import Header from "@/containers/Header/Header";
import PlaylistList from "@/containers/PlaylistList/PlaylistList";
import { mockPlaylists } from "@/utils/playlists";
import TrackList from "@/containers/TrackList/TrackList";
import { mockTracks } from "@/utils/tracks";

const MainPage: FC = () => {
    return (
        <main className={styles.main}>
            <Navigation links={navigationLinks} />
            <div className={styles.content}>
                <Header />
                <PlaylistList playlists={mockPlaylists} />
                <TrackList tracks={mockTracks} />
            </div>
        </main>
    );
};

export default MainPage;
