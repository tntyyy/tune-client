import AppRoutes from "@/routes";
import React, { FC } from "react";
import { BrowserRouter } from "react-router-dom";

const App: FC = () => {
    return (
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    );
};

export default App;
