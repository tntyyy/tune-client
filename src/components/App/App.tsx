import { PrivateRoutes, PublicRoutes } from "@/routes";
import React, { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { useAppSelector } from "@/hooks/redux";

const App: FC = () => {
    const { role } = useAppSelector((state) => state.auth);

    return (
        <BrowserRouter>
            {role === "USER" || role === "ARTIST" ? (
                <PrivateRoutes />
            ) : (
                <PublicRoutes />
            )}
            <ToastContainer />
        </BrowserRouter>
    );
};

export default App;
