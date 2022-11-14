import React, { FC, useState } from "react";

import pauseIcon from "@/assets/icons/pause.svg";
import playIcon from "@/assets/icons/play.svg";

import styles from "./PlayButton.module.scss";

interface PlayButtonProps {
    onPlayClick: () => void;
}

const PlayButton: FC<PlayButtonProps> = ({ onPlayClick }) => {
    const [isPlay, setIsPlay] = useState<boolean>(false);

    const handlePlayClick = (event: React.MouseEvent) => {
        event.stopPropagation();
        event.preventDefault();
        setIsPlay(!isPlay);
        onPlayClick();
    };

    return (
        <img
            onClick={handlePlayClick}
            src={isPlay ? pauseIcon : playIcon}
            alt="Handle play track"
        />
    );
};

export default PlayButton;
