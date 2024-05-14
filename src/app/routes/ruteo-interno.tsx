import { lazy } from 'react';
import { Bienvenida } from '../contenedor/bienvenida';
import { Route, Routes } from 'react-router-dom';
import { Error } from '../components/shared/Error';
import { DepartamentoAdmin } from '../components/private/departamento/departamentoAdmin';
import { DepartamentoCrear } from '../components/private/departamento/departamentoCrear';
import { DepartamentoEditar } from '../components/private/departamento/depatamentoEditar';



const LazyBienvenida = lazy(() => import('../contenedor/bienvenida').then(() => ({ default: Bienvenida })));
const LazyError = lazy(() => import('../components/shared/Error').then(() => ({ default: Error })));

const LazyDepartamentoAdmin = lazy(() => import('../components/private/departamento/departamentoAdmin').then(() => ({ default: DepartamentoAdmin })));
const LazyDepartamentoCrear = lazy(() => import('../components/private/departamento/departamentoCrear').then(() => ({ default: DepartamentoCrear })));
const LazyDepartamentoActualizar = lazy(() => import('../components/private/departamento/depatamentoEditar').then(() => ({ default: DepartamentoEditar })));
// Cargar componentes internos
// ***********************************************************************************************
const cargando = (
    <div className="d-flex justify-content-center">
        <div className="mt-3">
            <button className="btn btn-primary" type="button" disabled>
                <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true" ></span>
                Cargando información...
            </button>
        </div>
    </div>
);

export const RuteoInterno = () => {
    return (
        <Routes>
            <Route path="/adminDepartment" element={< LazyDepartamentoAdmin />} />
            <Route path="/addDepartment" element={< LazyDepartamentoCrear />} />
            <Route path="/updateDepartment/:codDepartamento" element={< LazyDepartamentoActualizar />} />

            <Route path="/" element={< LazyBienvenida />} />
            <Route path="*" element={< LazyError />} />
        </Routes>
    );
}