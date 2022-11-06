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
                <h1 className={styles.title}>
                    Hi <span>Ravil</span>, here are your favorite tracks
                </h1>
                <div className={styles.info}>
                    <div>
                        <p>Total tracks:</p>
                        <p>28</p>
                    </div>
                    <div>
                        <p>Total listening time:</p>
                        <p>
                            <span>3</span> hours and <span>21</span> minutes
                        </p>
                    </div>
                    <div>
                        <p>Favorite artist:</p>
                        <p>PINQ</p>
                    </div>
                </div>
                <TrackList tracks={[...mockTracks, ...mockTracks]} />
            </div>
        </main>
    );
};

export default FavoritesPage;
