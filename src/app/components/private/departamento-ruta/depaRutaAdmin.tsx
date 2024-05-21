import { Button, Modal } from "react-bootstrap";
import DepartamentoRuta from "../../../models/departamentoRuta";
import { useEffect, useState } from "react";
import ApiBack from "../../../utilities/domains/apiBack";
import ServicioPrivado from "../../../services/servicio-privado";
import { crearMensaje } from "../../../utilities/funciones/mensajes";
import { Link } from "react-router-dom";

export const DepartamentoRutaAdminstrar = () => {


    const [arregloDepaRutas, setArregloDepaRutas] = useState<DepartamentoRuta[]>([]);

    const [depaRutaSeleccionado, setDepaRutaSeleccionado] = useState<DepartamentoRuta>(new DepartamentoRuta(0, new Date(), 0, 0));

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const obtenerDepaRutas = async () => {
        const urlDepartamentos = ApiBack.DEPARUTA_LISTAR;
        const resultado = await ServicioPrivado.peticionGET(urlDepartamentos);
        setArregloDepaRutas(resultado);
    };

    const eliminarDepartamento = async (codigo: number) => {
        const url = ApiBack.DEPARUTA_ELIMINAR + "/" + codigo;
        const resultado = await ServicioPrivado.peticionDELETE(url);
        if (resultado.respuesta) {
            crearMensaje("success", "Departamento eliminado con exíto");
        } else {
            crearMensaje("error", "Fallo al eliminar el departamento");
        }
        obtenerDepaRutas();
        return resultado;
    };

    useEffect(() => {
        obtenerDepaRutas();
    }, [])

    return (
        <div>
            <h3 className="text-capitalize  fst-italic fw-bolder">Administar</h3>
            <nav className="" aria-label="breadcrumb">
                <ol className="breadcrumb fs-6">
                    <Link className="text-decoration-none link-info fw-normal breadcrumb-item" to="/dash">Incio</Link>
                    <li className="active breadcrumb-item" aria-current="page">Rutas Departamento</li>
                    <li className="active breadcrumb-item" aria-current="page">Administrar</li>

                </ol>
            </nav>
            <div className="card">
                <div className="px-4 py-3 mb-0 ">
                    <div className="row border-bottom">
                        <span className="col-md-6 fs-5 card-title">Administrar</span>
                        <span className="col-md-6 text-end">
                            <Link to="/dash/addDepartment" className="btn btn-sm btn-success m-2"> Agregar
                                &nbsp;<i className="fa fa-plus"></i>
                            </Link>
                        </span>
                    </div >
                </div>
                <div className="p-4 card-body">
                    <div className="text-muted mb-3 card-subtitle"></div>
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th style={{ width: "15%" }}> Codigo</th>
                                    <th style={{ width: "25%" }}>Departamento</th>
                                    <th style={{ width: "25%" }}>Ruta</th>
                                    <th style={{ width: "20%" }}>Registro</th>
                                    <th style={{ width: "15%" }}>&nbsp;</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    arregloDepaRutas.map((depaRuta, inidice) => (
                                        <tr key={inidice}>
                                            <td>{depaRuta.codDepartamento}</td>
                                            <td>{depaRuta.nombreDepartamento}</td>
                                            <td>{depaRuta.nombreRuta}</td>
                                            <td>{depaRuta.fechaCreacionDepartamentoRuta.toLocaleString()}</td>
                                            <td className="text-center">
                                                {/*  <Link to={`/dash/updateDepartment/${depaRuta.codDepartamento}`} className="azulito"> <i className="fa fa-edit"></i></Link>
                                                &nbsp;
                                                &nbsp; */}
                                                <a href="#" onClick={(e) => {
                                                    e.preventDefault();
                                                    setShow(true);
                                                    setDepaRutaSeleccionado(depaRuta);
                                                }}
                                                ><i className="fa fa-trash rojito"></i></a>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>

                        {/* INICIO:ventanita */}
                        <Modal
                            show={show}
                            onHide={handleClose}
                            backdrop="static"
                            keyboard={false}
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>Eliminar Departamento</Modal.Title>
                            </Modal.Header>
                            <Modal.Body className="text-center">
                                ¿ Estás seguro de borrar la ruta
                                <strong>{depaRutaSeleccionado.nombreRuta}</strong>
                                asignada al departamento
                                <strong> {depaRutaSeleccionado.nombreDepartamento}</strong>
                                ?

                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="danger" onClick={(e) => {
                                    eliminarDepartamento(depaRutaSeleccionado.codDepartamentoRuta);
                                    setShow(false)
                                }}>Eliminelo</Button>

                                <Button variant="secondary" onClick={handleClose}>
                                    Cancelar
                                </Button>
                            </Modal.Footer>
                        </Modal>
                        {/* FIN:ventanita */}
                    </div>
                </div>
            </div >
        </div>
    );

}