export interface IUsuario {
    nombre : string;
    correo : string;
    edad : number;
    password : string;
    hobbies : Array<string>;
    admin : boolean;
    idUsuario : number | undefined;
}