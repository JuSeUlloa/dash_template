class DatosRegistro {
    public nombresUsuario: string;
    public apellidosUsuario: string;
    public nombreAcceso: string;
    public claveAcceso: string;
    public reClaveAcceso?: string;

    constructor(nom: string, apel: string, corr: string, cla: string) {
        this.nombresUsuario = nom;
        this.apellidosUsuario = apel;
        this.nombreAcceso = corr;
        this.claveAcceso = cla;
    }

}
export default DatosRegistro;