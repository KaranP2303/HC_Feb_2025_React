// import React from "react";
// import { Navigate, Outlet } from "react-router-dom";
// import { useSelector } from "react-redux";

// const PrivateRoute = ({ roles }) => {
//   const { token, user } = useSelector((state) => state.auth);

//   if (!token) return <Navigate to="/login" />;
//   if (roles && !roles.includes(user?.userRole)) return <Navigate to="/unauthorized" />;

//   return <Outlet />;
// };

// export default PrivateRoute;

import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ allowedRoles }) => {
  const { user } = useSelector((state) => state.auth);

  if (!user) {
    return <Navigate to="/login" replace />;
  }
  console.log("user role", user.role,"---",user)
  return allowedRoles.includes(user.role) ? <Outlet /> : <Navigate to="/unauthorized" replace />;
};

export default ProtectedRoute;
