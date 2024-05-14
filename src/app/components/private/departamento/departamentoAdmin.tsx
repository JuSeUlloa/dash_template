import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Departamento from "../../../models/departamento";
import ApiBack from "../../../utilities/domains/apiBack";
import ServicioPrivado from "../../../services/servicio-privado";
import { Button, Modal } from "react-bootstrap";
import { crearMensaje } from "../../../utilities/funciones/mensajes";

export const DepartamentoAdmin = () => {

  const [arregloDepartamentos, setArregloDepartamentos] = useState<Departamento[]>([]);

  const [departamentoSeleccionado, setDepartamentoSeleccionado] = useState<Departamento>(new Departamento(0, ""));

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const obtenerDepartamentos = async () => {
    const urlDepartamentos = ApiBack.DEPARTAMENTO_LISTAR;
    const resultado = await ServicioPrivado.peticionGET(urlDepartamentos);
    setArregloDepartamentos(resultado);
  };

  const eliminarDepartamento = async (codigo: number) => {
    const url = ApiBack.DEPARTAMENTO_ELIMINAR + "/" + codigo;
    const resultado = await ServicioPrivado.peticionDELETE(url);
    if (resultado.respuesta) {
      crearMensaje("success", "Departamento eliminado con exíto");
    } else {
      crearMensaje("error", "Fallo al eliminar el departamento");
    }
    obtenerDepartamentos();
    return resultado;
  };

  useEffect(() => {
    obtenerDepartamentos();
  }, [])

  return (
    <div>
      <h3 className="text-capitalize  fst-italic fw-bolder">Administar</h3>
      <nav className="" aria-label="breadcrumb">
        <ol className="breadcrumb fs-6">
          <Link className="text-decoration-none link-info fw-normal breadcrumb-item" to="/dash">Incio</Link>
          <li className="active breadcrumb-item" aria-current="page">Departamento</li>
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
                  <th style={{ width: "65%" }}>Nombre</th>
                  <th style={{ width: "20%" }}>&nbsp;</th>
                </tr>
              </thead>

              <tbody>
                {
                  arregloDepartamentos.map((departamento, inidice) => (
                    <tr key={inidice}>
                      <td>{departamento.codDepartamento}</td>
                      <td>{departamento.nombreDepartamento}</td>
                      <td>
                        <Link to={`/dash/updateDepartment/${departamento.codDepartamento}`} className="azulito"> <i className="fa fa-edit"></i></Link>
                        &nbsp;
                        &nbsp;
                        <a href="#" onClick={(e) => {
                          e.preventDefault();
                          setShow(true);
                          setDepartamentoSeleccionado(departamento);
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
                ¿ Estás seguro de borrar el Departamento
                <strong> {departamentoSeleccionado.nombreDepartamento}</strong> ?

              </Modal.Body>
              <Modal.Footer>
                <Button variant="danger" onClick={(e) => {
                  eliminarDepartamento(departamentoSeleccionado.codDepartamento);
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