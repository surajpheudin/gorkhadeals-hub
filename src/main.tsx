import { ColorModeScript, theme } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Provider from "./providers";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Provider>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <App />
        </Provider>
    </React.StrictMode>
);
