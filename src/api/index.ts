/**
 * Questo è il posto centralizzato per eseguire le richieste al backend.
 */
import { TabClassificazione } from './tab_classificazione';
import { TabConformityMatrix } from './tab_conformity_matrix';

interface MyDb {
  tab_classificazione: TabClassificazione;
  tab_conformity_matrix: TabConformityMatrix;
}

let DB_API: MyDb;

/**
 * Eseuire qui le varie inizzializzazioni. Chiamato all'avvio
 */
export async function initApi() {
  DB_API = {
    tab_classificazione: new TabClassificazione(),
    tab_conformity_matrix: new TabConformityMatrix(),
  };
}

export function getDbApi() {
  return DB_API;
}
