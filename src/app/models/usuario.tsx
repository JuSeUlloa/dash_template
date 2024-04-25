class Usuario {
    public codUsuario: number;
    public identificacionUsuario: string;
    public nombresUsuario: string;
    public apellidosUsuario: string;
    public rolUsuario: string;


    constructor(cod: number, nom: string, ape: string, ide: string, rol: string) {
        this.codUsuario = cod;
        this.nombresUsuario = nom;
        this.apellidosUsuario = ape;
        this.identificacionUsuario = ide;
        this.rolUsuario = rol;
    }

}


export default Usuario;