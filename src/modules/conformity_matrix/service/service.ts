import { estraiDatiCampoUnivoci } from '@src/utils/util_dev';
import { IRecordDbMatrice } from '../interfacce/IRecordDbMatrice';
import { MatrixModel } from '../models/MatrixModel';
import { loadDatiMatrice, initDb } from './dati_provider';
import { getRequisiti } from './requisiti_provider';
import { loadProdottiByIds, findProdottoById } from './prodotti_provider';
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
  let idsRequisiti = estraiDatiCampoUnivoci(dati, 'id_requisito');
  let idsProdotti = estraiDatiCampoUnivoci(dati, 'id_prodotto');
  let requisiti = loadListaRequisiti(dati, idsRequisiti);

  let datiProdotti = creaDatiColonneProdotti(dati, idsProdotti, idsRequisiti);
  return {
    norma: {},
    requisiti: requisiti,
    datiProdotti: datiProdotti,
  };
}

// Dati dalla tabella requsiti normativi
function loadListaRequisiti(dati: IRecordDbMatrice[], idsRequisiti: any[]) {
  let parsedIds = idsRequisiti.map((item) => parseInt(item));
  let requisiti = getRequisiti(parsedIds);
  return requisiti;
}

//Dati dalla tabella prodotti
function loadListaProdotti(dati: IRecordDbMatrice[], idsProdotti: any[]) {
  let parsedIds = idsProdotti.map((item) => parseInt(item));
  let prodotti = loadProdottiByIds(parsedIds);
  return prodotti;
}

function creaDatiColonneProdotti(
  dati: IRecordDbMatrice[],
  idsProdotti: any[],
  idsRequisiti: any[]
) {
  let results = [];
  //Per ogni id prodotto
  idsProdotti.forEach((idProdotto) => {
    // Parametri del prodotto
    let prodotto = findProdottoById(idProdotto);
    // Dati del prodotto per la matrice
    let datiProdotto = dati.filter((item) => item.id_prodotto == idProdotto);
    let requisitiProdtto = datiProdotto.map((item) => item.id_requisito);
    let itemsProdotto = [];
    //Per ogni requisto del db verifico se è presente nei dati del prodotto
    idsRequisiti.forEach((idrequisito) => {
      if (requisitiProdtto.includes(idrequisito)) {
        let dato = datiProdotto.find((d) => d.id_requisito == idrequisito);
        itemsProdotto.push(dato);
      } else {
        itemsProdotto.push({
          id_requisito: idrequisito,
          vuoto: true,
          doc: '#',
        });
      }
    });

    results.push({
      prodotto: prodotto,
      dati: itemsProdotto,
    });
  });

  return results;
}

//Crea la colonna di dati per l'id del prodotto indicato
function creaItemsProdottoRequisiti(
  dati: IRecordDbMatrice[],
  idProdotto: number,
  idsRequisiti: any[]
) {
  let prodotto = findProdottoById(idProdotto);
  let datiProdotto = dati.filter((item) => item.id_prodotto == idProdotto);
  console.log(datiProdotto);
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
   *Sequenza logica di funzionamento
   Ricavo la lista univoca dei id requisiti, per contare il numero di righe da generare.
   Bisogna generare un array per ogni colonna della matrice
   Colonna Requsiti:
   Estraggo i dati per la norma, tutti i requisito appartengono alla stessa norma
   Come dati = Per ogni id_requsito ricavo i dati del requisito.

   Colonna Prodotti:
   Una colonna per ogni prodotto
   In base al id del prodotto estraggo i dati del prodotto.
   Ricavo id dei requisiti in cui è coinvolto il prodotto
   Per ogni id_requisito nella lista, verifico se il prodotto è coinvolto.
   Se se, copio i dati dal record db
   Se no, copio un oggetto placeholder.
   Per ogni requisito deve essere presente un valore.
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
