import { IRecordDbMatrice } from './../interfacce/IRecordDbMatrice';

const db_matrice: IRecordDbMatrice[] = [];

export function initDb() {
  for (let i = 0; i < 8; i++) {
    let idNorma: number, idRequisito: number, idProdotto: number;
    idNorma = 1;
    idRequisito = i;
    idProdotto = i % 2 == 0 ? 1 : i;
    let item = newItemMatrice(idNorma, idRequisito, idProdotto);
    db_matrice.push(item);
  }
}

export function loadDatiMatrice(idNorma: number): IRecordDbMatrice[] {
  return db_matrice.filter((item) => item.id_norma == idNorma);
}

function newItemMatrice(
  idNorma: number,
  idRequisito: number,
  idProdotto: number
) {
  let num = db_matrice.length;
  let item: IRecordDbMatrice = {
    id: num + 1,
    id_norma: idNorma,
    id_requisito: idRequisito,
    id_prodotto: idProdotto,
    doc: `Doc ${num}`,
    result: `Result ${num}`,
    status: `Status ${num}`,
    note: `Note ${num}`,
    last_update: Date.now().toString(),
  };
  return item;
}

function rnd() {
  // window.mkt.rndInRange(1, 3)
}

const dati_matrice = [
  { 'Requirement id': 1, 'Product id': 1, Result: 'P', Doc: 'rp21lab0010' },
  { 'Requirement id': 1, 'Product id': 4, Result: 'P', Doc: 'rp21lab0011' },
  { 'Requirement id': 1, 'Product id': 2, Result: 'P', Doc: 'rp21lab0012' },
  { 'Requirement id': 1, 'Product id': 3, Result: 'P', Doc: 'rp21lab0013' },
  { 'Requirement id': 1, 'Product id': 5, Result: 'P', Doc: 'rp21lab0014' },
];
const dati_matrice_bak = [
  { 'Requirement id': 1, 'Product id': 1, Result: 'P', Doc: 'rp21lab0010' },
  { 'Requirement id': 1, 'Product id': 4, Result: 'F', Doc: 'rp21lab0010' },
  { 'Requirement id': 1, 'Product id': 3, Result: 'P', Doc: '-' },
  { 'Requirement id': 2, 'Product id': 1, Result: 'F', Doc: 'rp21lab0014' },
  { 'Requirement id': 2, 'Product id': 2, Result: 'F', Doc: 'rp21lab0014' },
  { 'Requirement id': 2, 'Product id': 3, Result: 'P', Doc: 'rp21lab0014' },
  { 'Requirement id': 3, 'Product id': 1, Result: 'P', Doc: 'rp21lab0010' },
  { 'Requirement id': 3, 'Product id': 2, Result: 'P', Doc: 'rp21lab0010' },
  { 'Requirement id': 3, 'Product id': 3, Result: 'P', Doc: '-' },
  { 'Requirement id': 4, 'Product id': 1, Result: 'P', Doc: 'rp22lab0014' },
  { 'Requirement id': 4, 'Product id': 2, Result: 'P', Doc: 'rp22lab0014' },
  { 'Requirement id': 4, 'Product id': 3, Result: 'P', Doc: 'rp18lab0005' },
];
