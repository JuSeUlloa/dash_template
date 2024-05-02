import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Departamento from "../../../models/departamento";
import ApiBack from "../../../utilities/domains/apiBack";
import ServicioPrivado from "../../../services/servicio-privado";

export const DepartamentoAdmin = () => {

  const [arregloDepartamentos, setArregloDepartamentos] = useState<Departamento[]>([]);

  const obtenerDepartamentos = async () => {
    const urlDepartamentos = ApiBack.DEPARTAMENTO_LISTAR;
    const resultado = await ServicioPrivado.peticionGET(urlDepartamentos);
    setArregloDepartamentos(resultado);
    console.log(resultado);

  };

  useEffect(() => {
    obtenerDepartamentos();
  }, [])

  return (
    <div>
      <h5 className="text-capitalize  fst-italic fw-bolder">Administrar</h5>
      <nav className="" aria-label="breadcrumb">
        <ol className="breadcrumb fs-6">
          <Link className="text-decoration-none link-info fw-normal breadcrumb-item" to="/dash">Incio</Link>
          <li className="active breadcrumb-item" aria-current="page">Departamento</li>
          <li className="active breadcrumb-item" aria-current="page">Administrar</li>
        </ol>
      </nav>
      <div className="card" >
        <div className="">
          <div className=" d-flex px-4 py-3 mb-0 border-bottom">
            <span className="card-title">Departamentos Administrar</span>
            <span className="text-end">
              <Link to="/dash/addDepartment" className="btn btn-success btn btn-secondary btn-sm"> Agregar </Link>
            </span>
          </div>
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
                        <Link to=""> <i className="fa fa-edit"></i></Link>
                        &nbsp;
                        &nbsp;
                        <i className="fa fa-trash"></i>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div >
    </div>
  );
}