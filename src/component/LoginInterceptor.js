import { useNavigate } from "react-router-dom";

function LoginInterceptor() {
    const loginInformation = sessionStorage.getItem("login");
    return JSON.parse(loginInformation);
  }
  
  
export default LoginInterceptor