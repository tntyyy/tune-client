import React from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "@/components/App/App";
import { setupStore } from "@/store/store";
import { Provider } from "react-redux";

const root = createRoot(document.getElementById("root")!);
const store = setupStore();

const Root = (
    <Provider store={store}>
        <App />
    </Provider>
);

root.render(Root);
