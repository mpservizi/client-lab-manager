import { pausa } from '@src/utils/util_dev';
import { FAKE_DB, DbHelper } from '@src/shared/FrontDb';
import { INormaStudio, getDefaultNormaStudio } from './models/NormaStudio';
import {
  IRequisitoNormativo,
  IRequisitoNormativoDb,
} from './models/RequisitoNormativo';

async function loadListaNormeStudio() {
  let lista = FAKE_DB.TAB_STUDIO_NORME;
  let result: INormaStudio[] = [];
  lista.forEach((item) => {
    let obj = getDefaultNormaStudio();
    obj.id_norma = item.id_norma;
    obj.status = item.status;
    //Join su tabella norme
    let norma = FAKE_DB.TAB_NORME.find((norma) => norma.id == item.id_norma);
    if (norma) {
      obj.title_norma = norma.title;
    }
    result.push(obj);
  });
  await pausa(100);
  return result;
}

async function loadRequisitiPerNorma(id_norma: number) {
  let dati = FAKE_DB.TAB_REQUISITI_NORMATIVI.filter(
    (item) => item.std_id == id_norma
  );
  let result: IRequisitoNormativo[] = [];
  dati.forEach((item) => {
    let obj = convertiDbModelInFrontModel(item);
    result.push(obj);
  });
  pausa(500);
  return result;
}

async function addNewRequisito(item: IRequisitoNormativo) {
  let pojo = convertiFrontModelInDbModel(item);
  DbHelper.insertItem(FAKE_DB.TAB_REQUISITI_NORMATIVI, pojo);
  await pausa(500);
  return pojo;
}
async function updateRequisito(item: IRequisitoNormativo) {
  let pojo = convertiFrontModelInDbModel(item);
  DbHelper.updateItem(FAKE_DB.TAB_REQUISITI_NORMATIVI, pojo);
  await pausa(500);
  return pojo;
}

function convertiDbModelInFrontModel(
  model: IRequisitoNormativoDb
): IRequisitoNormativo {
  let result: IRequisitoNormativo = {
    id: model.id,
    id_norma: model.std_id,
    chapter: model.chapter,
    sub_chapter: model.sub_chapter,
    type_requirement: model.type_requirement,
    topic: model.topic,
    requirement: model.requirement,
    note: model.note,
    id_image: model.id_image,
  };
  return result;
}
function convertiFrontModelInDbModel(
  model: IRequisitoNormativo
): IRequisitoNormativoDb {
  let result: IRequisitoNormativoDb = {
    id: model.id,
    std_id: model.id_norma,
    chapter: model.chapter,
    sub_chapter: model.sub_chapter,
    type_requirement: model.type_requirement,
    topic: model.topic,
    requirement: model.requirement,
    note: model.note,
    id_image: model.id_image,
  };
  return result;
}

export default {
  loadListaNormeStudio,
  loadRequisitiPerNorma,
  addNewRequisito,
  updateRequisito,
};
