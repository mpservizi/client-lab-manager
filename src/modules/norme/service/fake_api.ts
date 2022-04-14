import { NormaModel } from '@models/Norma';
import { RequisitoNormaModel } from '@models/RequisitoNorma';

let db_requisiti: RequisitoNormaModel[] = undefined;
let db_norme: NormaModel[] = undefined;

export function loadListaNormeAnalizzate(): Promise<NormaModel[]> {
  let idsNormeAnalizzate = Array.from(
    new Set(db_requisiti.map((item) => item.std_id))
  );

  let norme = db_norme.filter((norma) => {
    return idsNormeAnalizzate.includes(norma.id);
  });

  return Promise.resolve(norme);
}

export function loadRequisitiPerNorma(idNorma: number) {
  let result = db_requisiti.filter((item) => item.std_id == idNorma);
  return Promise.resolve(result);
}

export async function addItem(
  newItem: RequisitoNormaModel
): Promise<RequisitoNormaModel> {
  let id = db_requisiti.length + 1;
  newItem.id = id;
  db_requisiti.push(newItem);
  return Promise.resolve(newItem);
}

export async function updateItem(
  newItem: RequisitoNormaModel
): Promise<RequisitoNormaModel> {
  let result = null;
  let objIndex = findItemIndex(newItem);
  if (objIndex > -1) {
    db_requisiti[objIndex] = newItem;
    result = db_requisiti[objIndex];
  } else {
    console.log('Impossibile aggiornaril db, indece non trovato');
  }
  return Promise.resolve(result);
}

export async function deleteItem(item: RequisitoNormaModel): Promise<boolean> {
  let result = false;
  let objIndex = findItemIndex(item);
  if (objIndex > -1) {
    db_requisiti.splice(objIndex, 1);
    result = true;
  } else {
    console.log('Impossibile aggiornaril db, indece non trovato');
  }
  return Promise.resolve(result);
}

//Metodo per caricare i fake dati iniziali nel db
export function initRepo() {
  initDbRequsiti();
  initDbNorme();
}

function initDbRequsiti() {
  db_requisiti = [];
  for (let i = 1; i < 6; i++) {
    let item = new RequisitoNormaModel();
    item.id = i;
    item.std_id = i;
    item.chapter = `Chapter ${i}`;
    item.std_code = `S-010${i}`;
    item.sub_chapter = `Sub chapter ${i}`;
    item.requirement = `Requirement ${i}`;
    item.type_requirement = `Tipo ${i}`;
    item.topic = `Topic ${i}`;
    item.note = `Note ${i}`;
    item.id_image = `10;${i}`;
    db_requisiti.push(item);
  }
}

function initDbNorme() {
  db_norme = [];
  for (let i = 1; i < 10; i++) {
    let item = new NormaModel();
    item.id = i;
    item.title = `Norma ${i}`;
    item.status = `Stato ${i}`;
    db_norme.push(item);
  }
}

/**
 * Trova la posizone del oggeto in db
 * @param {*} item
 * @returns
 */
function findItemIndex(item: RequisitoNormaModel) {
  let objIndex = db_requisiti.findIndex((obj) => obj.id == item.id);
  return objIndex;
}
