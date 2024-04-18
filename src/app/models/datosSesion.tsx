class DatosSesion {

    public id: number;
    public nombresUsuario: string;
    public apellidosUsuairio: string;
    public nombreAcceso: string;


    constructor(cod: number, nom: string, ape: string, nomA: string) {
        this.id = cod;
        this.nombresUsuario = nom;
        this.apellidosUsuairio = ape;
        this.nombreAcceso = nomA;
    }

}
export default DatosSesion;