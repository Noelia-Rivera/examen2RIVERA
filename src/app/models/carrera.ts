import { Facultad } from "./facultad";

export class Carrera {
    id_carrera: number;
    nombre: string;
    estado: string;
    id_facultad: Facultad

    constructor(id_carrera: number, nombre: string, estado: string, id_facultad: Facultad){
        this.id_carrera = id_carrera;
        this.nombre = nombre;
        this. estado = estado;
        this.id_facultad = id_facultad
    }
}
