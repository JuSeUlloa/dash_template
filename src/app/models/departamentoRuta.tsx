import Departamento from "./departamento";
import Ruta from "./ruta";

class DepartamentoRuta {

    public codDepartamentoRuta: number;
    public codDepartamento: number;
    public codRuta: number;
    public fechaCreacionDepartamentoRuta: Date;
    public nombreDepartamento?: string;
    public nombreRuta?: string;


    constructor(cod: number, fec: Date, codDe: number, codRu: number) {
        this.codDepartamentoRuta = cod;
        this.fechaCreacionDepartamentoRuta = fec;
        this.codDepartamento = codDe;
        this.codRuta = codRu;
    }

}
export default DepartamentoRuta;
