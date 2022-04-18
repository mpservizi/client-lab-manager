import { IRecordDbMatrice } from './interfacce/IRecordDbMatrice';

const db_matrice: IRecordDbMatrice[] = [];

export function initDb() {
  for (let i = 0; i < 5; i++) {
    let item = newItemMatrice();
    console.log(item);
    db_matrice.push(item);
  }
}

export function loadDatiMatrice() {}

function newItemMatrice() {
  let num = db_matrice.length;
  let item: IRecordDbMatrice = {
    id: num + 1,
    //@ts-ignore
    id_norma: window.mkt.rndInRange(1, 3),
    //@ts-ignore
    id_requisito: window.mkt.rndInRange(1, 10),
    //@ts-ignore
    id_prodotto: window.mkt.rndInRange(1, 5),
    doc: `Doc ${num}`,
    result: `Result ${num}`,
    status: `Status ${num}`,
    note: `Note ${num}`,
    last_update: Date.now().toString(),
  };
  return item;
}
