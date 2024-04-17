import Acceso from "../models/acceso";
import ApiBack from "../utilities/domains/apiBack";

class ServicioAcceso {

    public static async iniciarSesion(objAcceso: Acceso) {
        const datosEnviar = {
            method: "POST",
            body: JSON.stringify(objAcceso),
            headers: { "Content-Type": "application/json; charset=UTF-8" }
        }
        const url = ApiBack.URL + ApiBack.INICIAR_SESION;
        const respuesta = fetch(url, datosEnviar)
            .then((respuesta) => respuesta.json())
            .then((datos) => { return datos; })
            .catch((miError) => { return miError; });
        return respuesta;
    }

}

export default ServicioAcceso;