import { lazy } from 'react';
import { Routes, Route } from "react-router-dom"
import { Sesion } from "../components/public/Sesion";
import { Registro } from '../components/public/Registro';
import { Error } from '../components/shared/Error';
import { TableroPrincipal } from '../contenedor/tablero-principal';


const LazySesion = lazy(() => import("../components/public/Sesion").then(() => ({ default: Sesion })));
const LazyRegistro = lazy(() => import("../components/public/Registro").then(() => ({ default: Registro })));
const LazyError = lazy(() => import("../components/shared/Error").then(() => ({ default: Error })));
const LazyTablero = lazy(() => import("../contenedor/tablero-principal").then(() => ({ default: TableroPrincipal })));




export const RuteoPrincipal = () => {
    return (
        <Routes>
            <Route path='/' element={<LazySesion />} />
            <Route path='/signing' element={<LazySesion />} />
            <Route path='/register' element={<LazyRegistro />} />
            <Route path='/register' element={<LazyRegistro />} />

            <Route>
                <Route path='/dashboard/*' element={<LazyTablero />} />
            </Route>
            <Route path='*' element={<LazyError />} />
        </Routes>
    );

}