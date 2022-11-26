import { useLocation, Navigate, Outlet } from 'react-router-dom';
import useAuth from '~/hooks/useAuth';

const RequireAuth = ({ allowedRoles }) => {
  const { auth } = useAuth();
  console.log(auth);
  const location = useLocation();

  return auth?.user.roles.find((role) => allowedRoles?.includes(role)) ? (
    <Outlet />
  ) : auth?.user ? (
    <Navigate to='/unauthorized' state={{ from: location }} replace />
  ) : (
    <Navigate to='/auth' state={{ from: location }} replace />
  );
};

export default RequireAuth;
