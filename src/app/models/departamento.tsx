class Departamento {
    public codDepartamento: number;
    public nombreDepartamento: string;


    constructor(cod: number, nom: string) {
        this.codDepartamento = cod;
        this.nombreDepartamento = nom;
    }
}

export default Departamento;