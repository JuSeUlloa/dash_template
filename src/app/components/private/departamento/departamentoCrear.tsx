import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Departamento from "../../../models/departamento";
import ApiBack from "../../../utilities/domains/apiBack";
import ServicioPrivado from "../../../services/servicio-privado";
import { crearMensaje } from "../../../utilities/funciones/mensajes";
import { useFormulario } from "../../../utilities/misHooks/useFormulario";

export const DepartamentoCrear = () => {

    type formHtml = React.FormEvent<HTMLFormElement>;
    const [enProceso, setEnProceso] = useState<boolean>(false);

    let { nombreDepartamento, dobleEnlace, objeto } = useFormulario<Departamento>(new Departamento(0, ""));

    const navegacion = useNavigate();

    const enviarFormulario = async (frm: formHtml) => {
        frm.preventDefault();
        setEnProceso(true);
        const formulario = frm.currentTarget;
        formulario.classList.add("was-validated");

        if (formulario.checkValidity() === false) {
            frm.preventDefault();
            frm.stopPropagation();
        } else {
            const resultado = await ServicioPrivado.peticionPOST(ApiBack.DEPARTAMENTO_CREAR, objeto);
            if (resultado) {
                setEnProceso(false);
                crearMensaje("success", "Departamento creado con exíto");
                navegacion("/dash/adminDepartment");
            } else {
                crearMensaje("error", "Fallo al registrar el departamento");
            }

            limpiarCajas(formulario);
        }
    };



    const limpiarCajas = (formulario: HTMLFormElement) => {
        formulario.reset();
        nombreDepartamento = "";
        formulario.nombreDepartamento.value = "";
        formulario.classList.remove("was-validated");
    };

    return (
        <div>
            <h5 className="text-capitalize  fst-italic fw-bolder">Crear</h5>
            <nav className="" aria-label="breadcrumb">
                <ol className="breadcrumb fs-6">
                    <Link className="text-decoration-none link-info fw-normal breadcrumb-item" to="/dash">Incio</Link>
                    <li className="active breadcrumb-item" aria-current="page">Departamento</li>
                    <Link className="text-decoration-none link-info fw-normal breadcrumb-item" to="/dash/adminDepartment">Administrar</Link>
                    <li className="active breadcrumb-item" aria-current="page">Crear</li>
                </ol>
            </nav>
            <div className="m-4 card">
                <div className="bg-light card-body"><h4 className="mb-0 card-title">Información Departamento</h4></div>
                <div className="card-body">
                    <Form validated={enProceso} onSubmit={enviarFormulario}>
                        <div className="row">
                            <div className="col-md-6">
                                <Form.Group className="mb-3" controlId="nombreDepartamento">
                                    <Form.Label className="form-label">Nombre</Form.Label>
                                    <Form.Control type="text"
                                        className="form-control"
                                        required
                                        name="nombreDepartamento" />
                                </Form.Group>
                            </div>
                            <div className="border-top gap-2 d-flex align-items-center card-body">
                                <Button type="submit" className="btn btn-success btn btn-secondary">Registrar</Button>
                                <Button type="button" className="btn btn-dark ml-2 btn btn-secondary"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        navegacion("/dash/adminDepartment")
                                    }}
                                >Cancelar</Button>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
}