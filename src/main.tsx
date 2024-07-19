import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "react-notifications-component/dist/theme.css";
import { routes } from "./routes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import PageBottomLayout from "./layouts/PageBottomLayout";

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MainLayout>
      <PageBottomLayout>
        <RouterProvider router={router} />
      </PageBottomLayout>
    </MainLayout>
  </React.StrictMode>
);
