import React, { FC } from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRoutes from "@/routes";

const App: FC = () => {
  return (
      <BrowserRouter>
          <AppRoutes />
      </BrowserRouter>
  );
};

export default App;
