import http from '@src/http';
import { IRecordDbMatrice } from '../interfacce/IRecordDbMatrice';

//Scarica i dati dal server e manda la risposta al client
export async function loadDatiPerNorma(idNorma: number) {
  const URL_MATRICE_PER_NORMA = `/api/conformity_matrix?normaId=${idNorma}`;
  let dati = await http.get(URL_MATRICE_PER_NORMA);
  return parseDatiMatriceConformity(dati.data);
}

//Converte al risposta del server in oggetto da passare al ui
function parseDatiMatriceConformity(dati: any[]) {
  let result = [];
  dati.forEach((item) => {
    //Converto i campi del record
    let record = deSerializeItem(item);
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
