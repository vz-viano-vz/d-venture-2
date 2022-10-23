import Login from "../component/Login";
import { useAuth } from "../context/AuthContext";
const Login = () => {
    const currentUser = useAuth()
    
    return (  
        <Login/>
    );
}
 
export default Login;