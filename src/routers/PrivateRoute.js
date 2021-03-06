import { Route, Redirect, useLocation } from "react-router-dom";
import useAuth from "../auth/useAuth";

// const user = null;
// const user = {id: 1, username: "luis50"}

export default function PrivateRoute({ component: Component, ...rest }) {
  const auth = useAuth();
  const location = useLocation();
  return (
    <Route {...rest}>
      {auth.isLogged() ? (
        <Component />
      ) : (
        <Redirect to={{ pathname: "/home" , state: { from: location }}} />
      )}
    </Route>
  );
}
