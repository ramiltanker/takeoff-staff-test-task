import { FC, ReactNode } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";

interface IProtectedAuthorizedProps {
  children?: ReactNode;
}

const ProtectedAuthorized: FC<IProtectedAuthorizedProps> = ({
  children,
  ...rest
}) => {
  let loggedIn = false;

  if (localStorage.getItem("login")) {
    const userLogin = JSON.parse(localStorage.getItem("login")!).userLogin;
    loggedIn = userLogin;
  } else {
    loggedIn = false;
  }

  const location = useLocation();

  return !loggedIn ? (
    <Outlet />
  ) : (
    <Navigate to={"/contacts"} state={{ from: location }} replace />
  );
};

export default ProtectedAuthorized;
