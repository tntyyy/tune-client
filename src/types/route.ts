export enum NavigationRoutes {
    HOME = "/",
    PLAYLISTS = "/playlists",
    FAVORITES = "/favorites",
    ARTISTS = "/artists",
    TRACKS = "/tracks",
}

export interface INavigationRoute {
    id: number;
    path: NavigationRoutes;
    icon: string;
    altName: string;
}
