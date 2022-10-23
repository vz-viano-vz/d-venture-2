import Loogin from "../component/Login";
import { useAuth } from "../context/AuthContext";
const Login = () => {
    const currentUser = useAuth()
    
    return (  
        <Loogin/>
    );
}
 
export default Login;