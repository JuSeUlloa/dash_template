class Acceso {
    public codUsuario: number;
    public nombreAcceso: string;
    public claveAcceso: string;
    public reClaveAcceso?: string;

    constructor(cod: number, corr: string, cla: string) {
        this.codUsuario = cod;
        this.nombreAcceso = corr;
        this.claveAcceso = cla;
    }

}
export default Acceso;