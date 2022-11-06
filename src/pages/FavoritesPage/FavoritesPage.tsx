import React, { FC } from "react";

import Navigation from "@/containers/Navigation/Navigation";
import TrackList from "@/containers/TrackList/TrackList";

import { navigationLinks } from "@/utils/navigation";
import { mockTracks } from "@/utils/tracks";

import styles from "./FavoritesPage.module.scss";

const FavoritesPage: FC = () => {
    return (
        <main className={styles.main}>
            <Navigation links={navigationLinks} />
            <div className={styles.content}>
                <h1 className={styles.title}>Your favorite tracks</h1>
                <div className={styles.info}>
                    <p>Total tracks: 91</p>
                    <p>
                        Total listening time: <span>3</span> hours and{" "}
                        <span>21</span> minutes
                    </p>
                    <p>Favorite artist: PINQ</p>
                </div>
                <TrackList tracks={[...mockTracks, ...mockTracks]} />
            </div>
        </main>
    );
};

export default FavoritesPage;
