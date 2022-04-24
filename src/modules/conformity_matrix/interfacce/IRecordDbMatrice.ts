/**
 * Valori nella riga della tabella ConformityMatrix
 */
export interface IRecordDbMatrice {
  id: number;
  id_requisito: number;
  id_prodotto: number;
  doc: string; //documento di riferimento
  result: string; //Esito
  status: string;
  note: string;
  last_update: string;
}
