import React from "react";
import { useRoutes } from "react-router-dom";

import FavoritesPage from "@/pages/FavoritesPage/FavoritesPage";
import MainPage from "@/pages/MainPage/MainPage";
import SignInPage from "@/pages/SignInPage/SignInPage";
import SignUpPage from "@/pages/SignUpPage/SignUpPage";

import { AppRoutesEnum } from "@/routes/types";

const AppRoutes = () =>
    useRoutes([
        {
            path: AppRoutesEnum.HOME,
            element: <MainPage />,
        },
        {
            path: AppRoutesEnum.SIGNUP,
            element: <SignUpPage />,
        },
        {
            path: AppRoutesEnum.SIGNIN,
            element: <SignInPage />,
        },
        {
            path: AppRoutesEnum.FAVORITES,
            element: <FavoritesPage />,
        },
    ]);

export default AppRoutes;
