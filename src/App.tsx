import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Registro } from './app/components/public/Registro';
import { Sesion } from './app/components/public/Sesion';
import { Error } from './app/components/shared/Error';
import { Suspense } from 'react';
import { RuteoPrincipal } from './app/routes/ruteo-principal';

/* Cargar Renderizado */

const cargando = (
  <div className="d-flex justify-content-center">
    <div className="mt-3">
      <button className="btn btn-primary" type="button" disabled>
        <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true" ></span>
        Cargando ...
      </button>
    </div>
  </div>
);
// 


function App() {
  return (
    <BrowserRouter >
      <Suspense fallback={cargando}>
        <RuteoPrincipal />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
