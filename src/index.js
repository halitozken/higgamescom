import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App";
import { Provider } from "react-redux";
import { store, persistor } from "./stores";
import { PersistGate } from "redux-persist/integration/react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={router}>
            <App />
          </RouterProvider>
        </PersistGate>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);

