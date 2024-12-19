import { IUsuario } from "../usuario/usuario.interface";

export interface IPost {
    titulo: string;
    pais : string;
    provincia : string;
    ciudad : string;
    actividad : Array<string>;
    descripcion : string;
    idCreador: number;
    idPost? : number;
}