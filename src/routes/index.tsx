import React from "react";
import { useRoutes } from "react-router-dom";

import MainPage from "@/pages/MainPage/MainPage";
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
    ]);

export default AppRoutes;
