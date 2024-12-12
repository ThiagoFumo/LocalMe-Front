import { IUsuario } from "../usuario/usuario.interface";

export interface IPost {
    ttulo: string;
    pais : string;
    provincia : string;
    ciudad : string;
    actividad : Array<string>;
    descripcion : string;
    creador : IUsuario;
    idPost? : number;
}