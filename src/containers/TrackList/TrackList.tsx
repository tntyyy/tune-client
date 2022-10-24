import React, { FC } from "react";
import styles from "./TrackList.module.scss";
import { ITrack } from "@/types/track";
import Track from "@/components/Track/Track";

interface ITrackListProps {
    tracks: ITrack[];
}

const TrackList: FC<ITrackListProps> = ({ tracks }) => {
    return (
        <section className={styles.tracklist}>
            <h2 className={styles.title}>Tracks of the week</h2>
            <div className={styles.wrapper}>
                {tracks.map((track, index) => (
                    <Track
                        id={track.id}
                        name={track.name}
                        author={track.author}
                        cover={track.cover}
                        trackLength={track.trackLength}
                        playlistId={track.playlistId}
                        position={index}
                        key={track.id}
                    />
                ))}
            </div>
        </section>
    );
};

export default TrackList;
