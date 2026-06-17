import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App.jsx";
import SetupOnlyApp from "./SetupOnlyApp.jsx";
import "./styles.css";

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

const isConfigured =
  domain &&
  clientId &&
  domain !== "YOUR_AUTH0_DOMAIN" &&
  clientId !== "YOUR_AUTH0_CLIENT_ID";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {isConfigured ? (
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        authorizationParams={{ redirect_uri: window.location.origin }}
        cacheLocation="localstorage"
      >
        <App />
      </Auth0Provider>
    ) : (
      <SetupOnlyApp />
    )}
  </React.StrictMode>
);
