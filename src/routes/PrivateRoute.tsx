import { Navigate, Outlet } from "react-router-dom";

type PrivateRouteProps = {
  isAuthenticated: boolean;
};

const PrivateRoute = ({ isAuthenticated }: PrivateRouteProps) => {
  console.log(isAuthenticated);

  return isAuthenticated ? <Outlet /> : <Navigate to="/auth/login" replace />;
};

export default PrivateRoute;
