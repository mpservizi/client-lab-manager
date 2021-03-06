import { pausa } from '@src/utils/util_dev';
import { FAKE_DB, DbHelper } from '@src/shared/FrontDb';
import { INormaStudio, getDefaultNormaStudio } from './models/NormaStudio';
import {
  IRequisitoNormativo,
  IRequisitoNormativoDb,
} from './models/RequisitoNormativo';

/**
 *
 * @returns
 */
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
/**
 *
 * @param id_norma
 * @returns
 */
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
/**
 *
 * @param item
 * @returns
 */
async function addNewRequisito(
  item: IRequisitoNormativo
): Promise<IRequisitoNormativo> {
  let pojo = convertiFrontModelInDbModel(item);
  DbHelper.insertItem(FAKE_DB.TAB_REQUISITI_NORMATIVI, pojo);
  let result = convertiDbModelInFrontModel(pojo);
  await pausa(500);
  return result;
}
/**
 *
 * @param item
 * @returns
 */
async function updateRequisito(
  item: IRequisitoNormativo
): Promise<IRequisitoNormativo> {
  let pojo = convertiFrontModelInDbModel(item);
  DbHelper.updateItem(FAKE_DB.TAB_REQUISITI_NORMATIVI, pojo);
  let result = convertiDbModelInFrontModel(pojo);
  await pausa(500);
  return result;
}
/**
 *
 * @param id_requisito
 * @returns
 */
async function deleteRequisito(id_requisito: number): Promise<boolean> {
  let result = DbHelper.deleteItemById(
    FAKE_DB.TAB_REQUISITI_NORMATIVI,
    id_requisito
  );
  await pausa(500);
  return result;
}
//From db to ui
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
//From ui to db
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
  deleteRequisito,
};
