import { jwtDecode } from "jwt-decode";
import { Outlet, Navigate } from "react-router-dom";


type propsVigilante = { children?: any };

export const Vigilante = ({ children }: propsVigilante) => {
    if (localStorage.getItem("tokenAutorizacion")) {
        const token = String(localStorage.getItem("tokenAutorizacion"));
        try {
            jwtDecode(token);
        } catch {
            return <Navigate to="/login" />
        }
    } else {
        return <Navigate to="/login" />;
    }
    return children ? children : <Outlet />;
}