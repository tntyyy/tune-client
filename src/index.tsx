import React from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "@/components/App/App";

const root = createRoot(document.getElementById('root')!);

const Root = (
    <App />
);

root.render(Root);