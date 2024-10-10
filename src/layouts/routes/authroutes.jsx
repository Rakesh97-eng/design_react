import LoginForm from "../../pages/auth/login";
import Login from "../../pages/auth/login";

export const AuthRoutes = [
    {
        path:"/",
        element:<LoginForm/>
    },
    {
        path:"/register",
        element:<h3>Register</h3>
    }
]
