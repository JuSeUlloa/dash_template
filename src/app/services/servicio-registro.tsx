import Acceso from "../models/acceso";
import DatosRegistro from "../models/datosRegistro";
import ApiBack from "../utilities/domains/apiBack";

class ServicioRegistro {

    public static async iniciarSesion(objRegistro: DatosRegistro) {
        const datosEnviar = {
            method: "POST",
            body: JSON.stringify(objRegistro),
            headers: { "Content-Type": "application/json; charset=UTF-8" }
        }
        const url = ApiBack.URL + ApiBack.REGISTRO_USUARIO;
        const respuesta = fetch(url, datosEnviar)
            .then((respuesta) => respuesta.json())
            .then((datos) => { return datos; })
            .catch((miError) => { return miError; });
        return respuesta;
    }

}

export default ServicioRegistro;