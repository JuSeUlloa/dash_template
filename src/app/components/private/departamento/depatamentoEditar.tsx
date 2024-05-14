import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import Departamento from "../../../models/departamento";
import ApiBack from "../../../utilities/domains/apiBack";
import ServicioPrivado from "../../../services/servicio-privado";
import { crearMensaje } from "../../../utilities/funciones/mensajes";
import { useFormulario } from "../../../utilities/misHooks/useFormulario";

export const DepartamentoEditar = () => {

    type formHtml = React.FormEvent<HTMLFormElement>;
    const [enProceso, setEnProceso] = useState<boolean>(false);
    const [terminado, setTerminado] = useState<boolean>(false);

    let parametro = useParams();

    const obtenerDepartamento = async () => {
        const url = ApiBack.UN_DEPARTAMENTO + "/" + Number(parametro.codDepartamento);
        const resultado = await ServicioPrivado.peticionGET(url);

        objeto.nombreDepartamento = resultado.nombreDepartamento;
        if (resultado) {
            setTerminado(true);
        }
    }

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
            objeto.codDepartamento = Number(parametro.codDepartamento);
            const resultado = await ServicioPrivado.peticionPUT(ApiBack.DEPARTAMENTO_ACTUALIZAR, objeto);
            if (resultado) {
                setEnProceso(false);
                crearMensaje("success", "Departamento modificado con exíto");
                navegacion("/dash/adminDepartment");
            } else {
                crearMensaje("error", "Fallo al actualizar el departamento");
            }

            limpiarCajas(formulario);
        }
    };

    useEffect(() => {
        obtenerDepartamento();
    }, []);

    const limpiarCajas = (formulario: HTMLFormElement) => {
        formulario.reset();
        nombreDepartamento = "";
        formulario.nombreDepartamento.value = "";
        formulario.classList.remove("was-validated");
    };

    return (
        <div>
            <h5 className="text-capitalize  fst-italic fw-bolder">Actualizar</h5>
            <nav className="" aria-label="breadcrumb">
                <ol className="breadcrumb fs-6">
                    <Link className="text-decoration-none link-info fw-normal breadcrumb-item" to="/dash">Incio</Link>
                    <li className="active breadcrumb-item" aria-current="page">Departamento</li>
                    <Link className="text-decoration-none link-info fw-normal breadcrumb-item" to="/dash/adminDepartment">Administrar</Link>
                    <li className="active breadcrumb-item" aria-current="page">Actualizar</li>
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
                                        name="nombreDepartamento"
                                        value={nombreDepartamento}
                                        onChange={dobleEnlace}
                                    />
                                </Form.Group>
                            </div>
                            <div className="border-top gap-2 d-flex align-items-center card-body">
                                <Button type="submit" className="btn btn-success btn btn-secondary">Actualizar</Button>
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