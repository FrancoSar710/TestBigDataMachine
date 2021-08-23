import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  useHistory, 
} from "react-router-dom";


import useAuth from "../auth/useAuth";
import Navbar from "../components/Navbar";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import DiagramPage from "../pages/DiagramPage";

import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";



export default function AppRouter() {

  const history = useHistory();
  const auth = useAuth();
  const handleNullPath= () => {
    auth.logout();
    return (HomePage);
}

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/home" component={HomePage} />


        <Route exact path="/signin">
          <Redirect to="/login" />
        </Route>
        <Route exact path="/home" component={HomePage} />

        <PublicRoute exact path="/login" component={LoginPage} />
        <PrivateRoute exact path="/diagram" component={DiagramPage} />

        <Route exact path="/" component={handleNullPath }/>
        
        <Route path="/404" component={NotFoundPage} />
        <Route path="*">
          <Redirect to="/404" />
        </Route>
      </Switch>
    </Router>
  );
}


