import React from "react";
import { useRoutes } from "react-router-dom";
import Dashboard from "../core/Dashboard/DashboardContainer";
import Login from "../core/LoginContainer/Login";
import ViewContainer from "../core/MainContainer/ViewContainer";
import SignUp from "../core/SignUpContainer/SignUp";


export function CommonRoute() {
  return useRoutes([
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <SignUp /> },
    { path: "/*", element: <ViewContainer />, children: [{path: 'dashboard', element: <Dashboard />}] },
  ]);
}
