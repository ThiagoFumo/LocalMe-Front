import { IUsuario } from "../usuario/usuario.interface";

export interface IPost {
    pais : string;
    provincia : string;
    ciudad : string;
    actividad : Array<string>;
    descripcion : string;
    creador : IUsuario;
    idPost? : number;
}