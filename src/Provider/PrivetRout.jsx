import React, { use } from "react";
import { Navigate, useLocation } from "react-router";
import AuthContext from "./AuthContext";
import Loading from "../Components/Loading";

const PrivetRout = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loading />;
  }

  if (user && user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to="/auth/login"></Navigate>;
};

export default PrivetRout;
