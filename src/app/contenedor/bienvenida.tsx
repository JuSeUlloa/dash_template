import { jwtDecode } from "jwt-decode";
import { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import DatosSesion from "../models/datosSesion";

export const Bienvenida = () => {
    const navegacion = useNavigate();
    const token = String(localStorage.getItem("tokenAutorizacion"));
    const objRecibido: any = jwtDecode(token);

    const datosUsuario = new DatosSesion(
        objRecibido.id,
        objRecibido.nombresUsuario,
        objRecibido.apellidosUsuario,
        objRecibido.nombreAcceso,
    );

    const cerrarSesion = (event: MouseEvent<HTMLElement>) => {
        event.preventDefault();
        localStorage.removeItem("tokenAutorizacion");
        navegacion("/login");
    };

    return (
        <div className="mt-3">
            <div className="d-flex justify-content-center">
                <p>Bienvenido {datosUsuario.nombresUsuario}</p>
            </div>

            <div className="text-center">
                <button className="btn btn-outline-primary" onClick={cerrarSesion}>Cerrar Sesion</button>
            </div>
        </div>
    );
}