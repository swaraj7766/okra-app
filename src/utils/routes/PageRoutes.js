import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../../layout/MainLayout";
import CWRPage from "../../pages/Dashboard/CWRPage";
import Overview from "../../pages/Dashboard/Overview";
import SwitchPage from "../../pages/Dashboard/SwitchPage";
import SitePage from "../../pages/Deployment/SitePage";
import ZTPPage from "../../pages/Deployment/ZTPPage";
import LoginPage from "../../pages/LoginPage";
import PageNotFound from "../../pages/PageNotFound";
import PrivateRoute from "./PrivateRoute";

const PageRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Overview />
            </PrivateRoute>
          }
        />
        <Route
          path="/switch"
          element={
            <PrivateRoute>
              <SwitchPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/cwr"
          element={
            <PrivateRoute>
              <CWRPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/ztp"
          element={
            <PrivateRoute>
              <ZTPPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/sitemanagement"
          element={
            <PrivateRoute>
              <SitePage />
            </PrivateRoute>
          }
        />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default PageRoutes;
