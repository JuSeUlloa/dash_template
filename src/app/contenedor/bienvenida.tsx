import { jwtDecode } from "jwt-decode";
import { MouseEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
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
        <div className="">
            <h5 className="text-capitalize  fst-italic fw-bolder">Inicio</h5>
            <nav className="" aria-label="breadcrumb">
                <ol className="breadcrumb fs-6">
                    <Link className="text-decoration-none link-info fw-normal breadcrumb-item" to="/dash">Incio</Link>
                    <li className="active breadcrumb-item" aria-current="page">Bienvenida</li>
                    {/*     <li className="active breadcrumb-item" aria-current="page">chartjs</li>
                             */}
                </ol>
            </nav>
            <div className="card" >
                <div className="p-4 card-body" >
                    <p className="mb-0" >
                        This is some text within a card block.
                    </p>
                </div >
            </div>
        </div>


    );
}