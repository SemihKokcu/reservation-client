import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "./assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/scss/argon-dashboard-react.scss";
import {Provider} from 'react-redux';
import {store} from './store/store';
import HomeLayout from "./pages/layout/HomeLayout.jsx";
import Admin from "pages/layout/AdminLayout";
import AuthLayout from "pages/layout/AuthLayout";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store = {store}>
<BrowserRouter>
    <Routes>
      <Route path="/*" element={<HomeLayout />} />
      <Route path="/admin/*" element={<Admin />} />
      <Route path="/auth/*" element={<AuthLayout />} />
      <Route path="*" element={<Navigate to="/auth/login" replace />} />
    </Routes>
  </BrowserRouter>
  </Provider>
);
