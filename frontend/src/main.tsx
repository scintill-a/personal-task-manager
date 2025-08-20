import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = import.meta.env.VITE_APP_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_APP_AUTH0_CLIENT_ID;
const audience = import.meta.env.VITE_API_AUTH0_AUDIENCE;

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
const root = createRoot(rootElement);

root.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: audience,
      scope: "openid profile email read:messages",
    }}
  >
    <App />
  </Auth0Provider>
);
