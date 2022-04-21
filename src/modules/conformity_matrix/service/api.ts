import { getDbApi } from '@src/api';
import { IRecordDbMatrice } from '../interfacce/IRecordDbMatrice';

const API = getDbApi();
//Scarica i dati dal server e manda la risposta al client
export async function loadDatiPerNorma(idNorma: number) {
  let dati_matrice = await API.tab_conformity_matrix.getRecordsByIdNorma(
    idNorma
  );
  let dati_classificazione = await API.tab_classificazione.getAll();
  return parseDatiMatriceConformity(dati_matrice, dati_classificazione);
}

//Converte al risposta del server in oggetto da passare al ui
function parseDatiMatriceConformity(
  dati_matrice: any[],
  dati_classificazione: any[]
) {
  let result = [];
  dati_matrice.forEach((item) => {
    //Converto i campi del record
    let record = deSerializeItem(item);
    //Ricavo i dati della classificazione del prodotto
    let idClassificazione = item.prodotto.classificazioneId;
    let classificazione = dati_classificazione.find(
      (record) => record.id == idClassificazione
    );
    if (classificazione) {
      item.prodotto.classificazione = classificazione;
    }
    //Creo l'oggetto da passare al service
    let obj = {
      record: record,
      norma: item.norma,
      prodotto: item.prodotto,
      requisito: item.requisito,
    };
    result.push(obj);
  });
  return result;
}

function ricavaClassificazioneProdotto(dati_classificazione: any[]) {}

//Abbina i campi record della matrice passata da server al oggetto da usare in ui
function deSerializeItem(response: any) {
  let item: IRecordDbMatrice = {
    id: response['id'],
    id_norma: response['normaId'],
    id_requisito: response['requisitoId'],
    id_prodotto: response['prodottoId'],
    doc: response['doc'],
    result: response['esito'],
    status: response['stato'],
    note: response['note'],
    last_update: Date.now().toString(),
  };
  return item;
}
