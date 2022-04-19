import { estraiDatiCampoUnivoci } from '@src/utils/util_dev';
import { IRecordDbMatrice } from '../interfacce/IRecordDbMatrice';
import { MatrixModel } from '../models/MatrixModel';
import { loadDatiMatrice, initDb } from './dati_provider';
import { getRequisiti } from './requisiti_provider';
import { loadProdottiByIds } from './prodotti_provider';
export function initService() {
  initDb();
}

function loadDati() {
  let result: MatrixModel[] = [];
  let item = new MatrixModel();
  item.dati = [];
  item.norma = undefined;
}

export function loadDatiPerMatrice() {
  let idNorma = 1;
  let dati = loadDatiMatrice(idNorma);
  let requisiti = loadListaRequisiti(dati);
  let prodotti = loadListaProdotti(dati);
  return {
    requisiti: requisiti,
    prodotti: prodotti,
  };
}

// Dati dalla tabella requsiti normativi
function loadListaRequisiti(dati: IRecordDbMatrice[]) {
  let idsRequisiti = estraiDatiCampoUnivoci(dati, 'id_requisito');
  let parsedIds = idsRequisiti.map((item) => parseInt(item));
  let requisiti = getRequisiti(parsedIds);
  return requisiti;
}

//Dati dalla tabella prodotti
function loadListaProdotti(dati: IRecordDbMatrice[]) {
  let idsProdotti = estraiDatiCampoUnivoci(dati, 'id_prodotto');
  let parsedIds = idsProdotti.map((item) => parseInt(item));
  let prodotti = loadProdottiByIds(parsedIds);
  return prodotti;
}

// Per ogni record dei dati dalla tabella matrix conformity, abbina i cambi dei requisiti i prodotti
function creaDatiPerMatrice(dati: IRecordDbMatrice[]) {
  /* Campi del record dati  
    id: number;
    id_norma: number;
    id_requisito: number;
    id_prodotto: number;
    doc: string; //docuemnto di riferimento
    result: string; //Esito
    status: string;
    note: string;
    last_update: string;
    */

  /**
   *
   */
  let datiProdotto = {
    prodotto: {},
    dati: [],
  };
  let datiRequisiti = {
    norma: {},
    dati: [],
  };
}
