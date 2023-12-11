export class Cliente {
    private nombre: string;
    private cif: string;
    private direccion: string;
    private grupo: string;

    constructor(nombre: string = "", cif: string = "", direccion: string = "", grupo: string = "Sin definir"){
        this.nombre = nombre;
        this.cif = cif;
        this.direccion = direccion;
        this.grupo = grupo;
    }
}
