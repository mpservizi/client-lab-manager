export interface IComitee {
  id: number;
  title: string;
}
// Parametri per creare il form norme
export interface IFormConfig {
  listaComitee: Array<IComitee> | undefined;
}
