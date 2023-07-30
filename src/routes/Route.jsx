import React from "react";
import { useRoutes } from "react-router-dom";
import Login from "../core/LoginContainer/Login";
import SignUp from "../core/SignUpContainer/SignUp";

export function CommonRoute() {
  return useRoutes([
    { path: "/", element: <Login /> },
    { path: "/signup", element: <SignUp /> },
  ]);
}
