import http from '@src/http';
import { IRecordDbMatrice } from '../interfacce/IRecordDbMatrice';

//Scarica i dati dal server e manda la risposta al client
export async function loadDatiPerNorma(idNorma: number) {
  const URL_MATRICE_PER_NORMA = `/api/conformity_matrix?normaId=${idNorma}`;
  const URL_CLASSIFICAZIONE_PRODOTTI = `/api/classificazione`;
  let dati_matrice = await http.get(URL_MATRICE_PER_NORMA);
  let dati_classificazione = await http.get(URL_CLASSIFICAZIONE_PRODOTTI);
  return parseDatiMatriceConformity(
    dati_matrice.data,
    dati_classificazione.data
  );
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
