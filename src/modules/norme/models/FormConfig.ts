export interface IComitee {
  id: number;
  title: string;
}
// Parametri per creare il form norme
export interface IFormConfig {
  lista_comitee: Array<IComitee> | undefined;
  tipi_norme: Array<string> | undefined;
  tipi_status: Array<string> | undefined;
}
