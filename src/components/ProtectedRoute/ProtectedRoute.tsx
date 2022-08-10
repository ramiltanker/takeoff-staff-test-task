import { FC, ReactNode, useEffect, useState } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "../../services/hooks/redux";

interface IProtectedRouteProps {
  children?: ReactNode;
}

const ProtectedRoute: FC<IProtectedRouteProps> = ({ children, ...rest }) => {
  let loggedIn = false;

  if (localStorage.getItem("login")) {
    const userLogin = JSON.parse(localStorage.getItem("login")!).userLogin;
    loggedIn = userLogin;
  } else {
    loggedIn = false;
  }

  const location = useLocation();

  return loggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/sign-in" state={{ from: location }} replace />
  );
};

export default ProtectedRoute;
