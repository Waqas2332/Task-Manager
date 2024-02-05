import { Navigate, Outlet } from "react-router-dom";

type PublicRoutesProps = {
  isAuthenticated: boolean;
};

const PublicRoutes = ({ isAuthenticated }: PublicRoutesProps) => {
  console.log(isAuthenticated);

  return !isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/todo/all-todos" replace />
  );
};

export default PublicRoutes;
