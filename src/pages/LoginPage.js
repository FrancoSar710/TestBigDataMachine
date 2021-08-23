import { useHistory, useLocation } from 'react-router-dom';
import useAuth from "../auth/useAuth";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export default function LoginPage() {
    const username = "gerente";
    const password = "pass123";
    const history = useHistory();
    const location = useLocation();
    const previusObjectURL = location.state?.from;

    const auth = useAuth();
    const handleLogin = () => {
        auth.login();
        history.push(previusObjectURL || "/home")
    }
    return (
        <div >
            <h1>LoginPage</h1>
            usuario 
            <h1>    
            <TextField   variant= "outlined">
                
            </TextField>
            </h1>
            contraseña  
            <h1> 
            <TextField  variant= "outlined">
                
            </TextField>
            </h1>
            <h1><Button variant = "contained" onClick={handleLogin} color="primary">
                Signin
            </Button></h1>
        </div>
    )
}
