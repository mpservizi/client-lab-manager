import { estraiCampo, estraiDatiCampoUnivoci } from '@src/utils/util_dev';
import { IRecordDbMatrice } from '../interfacce/IRecordDbMatrice';
import { getRequisiti } from './requisiti_provider';
import { loadDatiPerNorma } from './api';

//Metodo per eseguire init dei dati di prova
export async function initService() {}
//Carica dal server i dati per creare la matrice per la norma indicata
export async function loadDatiPerMatrice(idNorma: number) {
  let dati = await loadDatiPerNorma(idNorma);
  let records = estraiCampo(dati, 'record');
  let idsRequisiti = estraiDatiCampoUnivoci(records, 'id_requisito');
  let idsProdotti = estraiDatiCampoUnivoci(records, 'id_prodotto');
  let requisiti = estraiRequisitiInBaseAlId(dati, idsRequisiti);
  let datiProdotti = creaDatiColonneProdotti(dati, idsProdotti, idsRequisiti);
  let norma = dati[0].norma;

  return {
    norma: norma,
    requisiti: requisiti,
    datiProdotti: datiProdotti,
  };
}

function estraiRequisitiInBaseAlId(dati: any[], idsRequisiti: any[]) {
  let result = [];
  idsRequisiti.forEach((id) => {
    let dato = dati.find((item) => item.requisito.id == id);
    if (dato) {
      result.push(dato.requisito);
    }
  });

  return result;
}

function creaDatiColonneProdotti(
  dati: any[],
  idsProdotti: any[],
  idsRequisiti: any[]
) {
  let results = [];
  //Per ogni id prodotto
  idsProdotti.forEach((idProdotto) => {
    // Parametri del prodotto
    // let prodotto = findProdottoById(idProdotto);
    let itemProdotto = dati.find((item) => item.prodotto.id == idProdotto);
    let prodotto = itemProdotto.prodotto;
    // Dati del prodotto per la matrice
    // let datiProdotto = dati.filter((item) => item.id_prodotto == idProdotto);
    let datiProdotto = dati.filter(
      (item) => item.record.id_prodotto == idProdotto
    );
    // let requisitiProdtto = datiProdotto.map((item) => item.id_requisito);
    let requisitiProdtto = datiProdotto.map((item) => item.record.id_requisito);
    let itemsProdotto = [];
    //Per ogni requisto del db verifico se è presente nei dati del prodotto
    idsRequisiti.forEach((idrequisito) => {
      if (requisitiProdtto.includes(idrequisito)) {
        // let dato = datiProdotto.find((d) => d.id_requisito == idrequisito);
        let dato = datiProdotto.find(
          (d) => d.record.id_requisito == idrequisito
        );
        itemsProdotto.push(dato.record);
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
