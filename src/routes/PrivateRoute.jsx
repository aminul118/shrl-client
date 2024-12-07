import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  // console.log(location);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (user) {
    return children;
  } else {
    return <Navigate state={location.pathname} to={"/login"} />;
  }
};

export default PrivateRoute;
