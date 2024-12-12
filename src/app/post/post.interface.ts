import { IUsuario } from "../usuario/usuario.interface";

export interface IPost {
    titulo : string;
    contenido : string;
    fecha : Date;
    autor : IUsuario;
    idPost? : number;
}