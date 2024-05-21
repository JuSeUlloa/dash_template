class Ruta {
    public codRuta: number;
    public nombreRuta: string;
    public concesionRuta: string;

    constructor(cod: number, nom: string, con: string) {
        this.codRuta = cod;
        this.nombreRuta = nom;
        this.concesionRuta = con;
    }
}

export default Ruta;