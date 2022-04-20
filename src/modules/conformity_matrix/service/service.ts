import { estraiDatiCampoUnivoci } from '@src/utils/util_dev';
import { IRecordDbMatrice } from '../interfacce/IRecordDbMatrice';
import { MatrixModel } from '../models/MatrixModel';
import { loadDatiMatrice, initDb } from './dati_provider';
import { getRequisiti } from './requisiti_provider';
import { loadProdottiByIds, findProdottoById } from './prodotti_provider';
import { findNormaById } from './norme_provider';
export function initService() {
  initDb();
}

export function loadDatiPerMatrice() {
  let idNorma = 1;
  let dati = loadDatiMatrice(idNorma);
  let idsRequisiti = estraiDatiCampoUnivoci(dati, 'id_requisito');
  let idsProdotti = estraiDatiCampoUnivoci(dati, 'id_prodotto');
  let requisiti = loadListaRequisiti(dati, idsRequisiti);
  let norma = findNormaById(idNorma);
  let datiProdotti = creaDatiColonneProdotti(dati, idsProdotti, idsRequisiti);
  return {
    norma: norma,
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
