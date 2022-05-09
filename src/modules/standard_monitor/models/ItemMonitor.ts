import { INormaForm } from '@src/modules/norme/models/Norma';
// Campi usati in ui
export interface IItemMonitor {
  id: number | undefined;
  id_norma: number | undefined;
  //Usata per ricavare i dati della norma
  norma: INormaForm | undefined;
  last_update: string;
  who: string;
  source: string;
  note: string;
}
//Campi da salvare in db per il model
export interface IItemMonitorDb {
  id: number | undefined;
  id_norma: number | undefined;
  last_update: string;
  who: string;
  source: string;
  note: string;
}

//Campi default per il model
export function getDefaultModel(): IItemMonitor {
  let result: IItemMonitor = {
    id: undefined,
    id_norma: undefined,
    norma: undefined,
    last_update: '',
    who: '',
    source: '',
    note: '',
  };
  return result;
}
