import { INavigationRoute, NavigationRoutes } from "@/types/route";

import tracksIcon from "@/assets/icons/collection.svg";
import genresIcon from "@/assets/icons/compass.svg";
import favoritesIcon from "@/assets/icons/heart.svg";
import homeIcon from "@/assets/icons/home.svg";

export const navigationLinks: INavigationRoute[] = [
    {
        id: 1,
        path: NavigationRoutes.HOME,
        icon: homeIcon,
        altName: "Home",
    },
    {
        id: 2,
        path: NavigationRoutes.PLAYLISTS,
        icon: genresIcon,
        altName: "Playlists",
    },
    {
        id: 3,
        path: NavigationRoutes.TRACKS,
        icon: tracksIcon,
        altName: "Tracks",
    },
    {
        id: 4,
        path: NavigationRoutes.FAVORITES,
        icon: favoritesIcon,
        altName: "Favorites",
    },
];
