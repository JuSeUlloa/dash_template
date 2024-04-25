import { Form } from "react-bootstrap";
import DatosRegistro from "../../models/datosRegistro";
import { useFormulario } from "../../utilities/misHooks/useFormulario";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import jsSHA from "jssha";
import ServicioRegistro from "../../services/servicio-registro";
import { jwtDecode } from "jwt-decode";
import DatosSesion from "../../models/datosSesion";
import { crearMensaje } from "../../utilities/funciones/mensajes";


export const Registro = () => {
    type formHtml = React.FormEvent<HTMLFormElement>;
    const [enProceso, setEnProceso] = useState<boolean>(false);
    const navegacion = useNavigate();

    let { nombresUsuario, apellidosUsuario, nombreAcceso, claveAcceso,reClaveAcceso, dobleEnlace, objeto } = useFormulario<DatosRegistro>(new DatosRegistro("", "", "", ""));

    const enviarFormulario = async (frm: formHtml) => {
        frm.preventDefault();
        setEnProceso(true);
        const formulario = frm.currentTarget;
        formulario.classList.add("was-validated");
        if (formulario.checkValidity() === false) {
            frm.preventDefault();
            frm.stopPropagation();
        } else {
            let objSha512 = new jsSHA("SHA-512", "TEXT", { encoding: "UTF8" });

            const claveCifrar = objSha512.update(objeto.claveAcceso).getHash("HEX");
            objeto.claveAcceso = claveCifrar;
            reClaveAcceso=claveCifrar;

            const respuesta = await ServicioRegistro.iniciarSesion(objeto);

            if (respuesta.tokenApp) {
                const objRecibido: any = jwtDecode(respuesta.tokenApp);
                const datosUsuario = new DatosSesion(
                    objRecibido.id,
                    objRecibido.nombresUsuario,
                    objRecibido.apellidosUsuario,
                    objRecibido.nombreAcceso,
                );
                console.log(objRecibido);

                localStorage.setItem("tokenAutorizacion", respuesta.tokenApp);
                navegacion("/dash")
                crearMensaje("success", "Bienvenido " + datosUsuario.nombresUsuario);
            } else {
                limpiarCajas(formulario);
            }
            setEnProceso(false);

        }

    }
    /* limpiar campos */
    const limpiarCajas = (formulario: HTMLFormElement) => {
        formulario.reset();

        objeto.nombreAcceso = "";
        objeto.claveAcceso = "";

        formulario.nombreAcceso.value = "";
        formulario.claveAcceso.value = "";

        formulario.classList.remove("was-validated");
    };

    return (
        <div>
            <div className="registerBox">
                <svg xmlns="http://www.w3.org/2000/svg" width="376" height="317" fill="none" className="position-absolute left bottom-0"><path fill="#2B87F3" d="M98 59.596c-28-61.6-77-63.667-98-57v314l375-1c2.4-80.8-78-135.333-118-150-41.333-9.667-131-44.4-159-106Z"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="235" height="255" fill="none" className="position-absolute end-0 top"><path fill="#62CFF1" fill-opacity="0.5" d="M68.1 80.835C29.568 58.825 50.747 26.4 66.154 12.937L221.33 57.304l-47.588 170.031c-54.155 25.255-83.028 7.944-90.695-3.868-5.774-13.59 7.306-40.363 14.567-52.051 19.963-22.85 22.57-48.563 21.379-58.563-6.44-19.763-36.613-29.58-50.894-32.018Z"></path><path fill="#62CFF1" d="M88 72C43.2 60 55.333 19 67 0l168 1v196c-47.2 43.2-81 33.333-92 23-9.6-12.8-4-45.333 0-60 13.6-30.4 9-58.667 5-69-12-19.2-45-20.667-60-19Z"></path></svg>
                <div className="h-100 container-fluid">
                    <div className="d-flex justify-content-center align-items-center row">
                        <div className="registerContainer col-lg-12 p-4">
                            <div className="card">
                                <div className="p-4 m-1 card-body">
                                    <h4 className="mb-0 fw-bold">Registro</h4>
                                    <small className="pb-4 d-block">Ya tienes una cuenta?
                                        &nbsp;<Link to="/login">Click aquí</Link>
                                    </small>
                                    <Form validated={enProceso} onSubmit={enviarFormulario}>
                                        <div className=" row">
                                            <Form.Group className="mb-3 col-md-6" controlId="nombresUsuario">
                                                <Form.Label className="form-label">
                                                    <span className="rojito">*</span>Nombres</Form.Label>
                                                <input
                                                    type="text"
                                                    className="form-control "
                                                    required
                                                    name="nombresUsuario"
                                                    value={nombresUsuario}
                                                    onChange={dobleEnlace}
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3 col-md-6" controlId="apellidosUsuario">
                                                <Form.Label className="form-label">
                                                    <span className="rojito">*</span>Apellidos</Form.Label>
                                                <input
                                                    type="text"
                                                    className="form-control "
                                                    required
                                                    name="apellidosUsuario"
                                                    value={apellidosUsuario}
                                                    onChange={dobleEnlace}
                                                />
                                            </Form.Group>
                                        </div>
                                        <Form.Group className="mb-3" controlId="nombreAcceso">
                                            <Form.Label className="form-label">
                                                <span className="rojito">*</span> Correo Electronico
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                className="form-control"
                                                required
                                                name="nombreAcceso"
                                                value={nombreAcceso}
                                                onChange={dobleEnlace} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="claveAcceso">
                                            <Form.Label className="form-label">
                                                <span className="rojito">*</span> Contraseña
                                            </Form.Label>
                                            <Form.Control
                                                className="form-control"
                                                required
                                                type="password"
                                                name="claveAcceso"
                                                value={claveAcceso}
                                                onChange={dobleEnlace} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="reClaveAcceso">
                                            <Form.Label className="form-label">
                                                <span className="rojito">*</span>Confirmar contraseña
                                            </Form.Label>
                                            <Form.Control
                                                className="form-control"
                                                required
                                                type="password"
                                                name="reClaveAcceso"
                                                pattern={claveAcceso} />
                                            <Form.Control.Feedback type="invalid">
                                                Contraseñas no coinciden
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <div className="mb-3 text-center">
                                            <button type="submit" className="me-2 btn btn-info col-md-6">Registrar</button>

                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );


}