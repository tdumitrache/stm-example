import ReactDOM from "react-dom/client";

import { MsalProvider } from "@azure/msal-react";
import msalInstance from "config/auth/instance";

import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <MsalProvider instance={msalInstance}>
    <Router>
      <App />
    </Router>
  </MsalProvider>
);
