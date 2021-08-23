import { NavLink } from "react-router-dom";
import useAuth from "../auth/useAuth";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

export default function Navbar() {
  const auth = useAuth();

  return (
    <nav>
      <ul>
        <ButtonGroup >
          <Button size = "large" variant="contained" color="primary" >
            <NavLink exact to="/home" activeClassName="active">
              Home
            </NavLink>
          </Button>
          {!auth.isLogged() && (
            <>
              <Button size = "large" variant="contained" color="primary" >
                <NavLink exact to="/login" activeClassName="active">
                  Login
                </NavLink>
              </Button>
            </>
          )}

          {auth.isLogged() && (
            <>
              <Button size = "large" variant="contained" color="primary">
                <NavLink exact to="/diagram" activeClassName="active">
                  Diagram
                </NavLink>
              </Button>
            

              <Button size = "large" variant="contained" color="primary" onClick={auth.logout}>
                Logout
              </Button>


            </>

          )}
        </ButtonGroup>
      </ul>
    </nav>
  );
}
