import AppRoutes from "@/routes";
import React, { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const App: FC = () => {
    return (
        <BrowserRouter>
            <AppRoutes />
            <ToastContainer />
        </BrowserRouter>
    );
};

export default App;
