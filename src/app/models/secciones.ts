import { Categoria } from "./categoria";

export interface Seccion{
    id:number,
    nombre:string,
    estado:string,
    categoria: Categoria
  }