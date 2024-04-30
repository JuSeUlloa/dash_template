import { Link } from "react-router-dom";

export const DepartamentoAdmin = () => {
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
        <div className="p-4 card-body" >
          <p className="mb-0" >
            This is some text within a card block.
          </p>
        </div>
      </div >
    </div>
  );
}