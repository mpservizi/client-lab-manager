import { pausa } from '@src/utils/util_dev';
import { FAKE_DB } from '@src/shared/FrontDb';
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

function convertiDbModelInFrontModel(
  dbModel: IRequisitoNormativoDb
): IRequisitoNormativo {
  let result: IRequisitoNormativo = {
    id: dbModel.id,
    id_norma: dbModel.std_id,
    chapter: dbModel.chapter,
    sub_chapter: dbModel.sub_chapter,
    type_requirement: dbModel.type_requirement,
    topic: dbModel.topic,
    requirement: dbModel.requirement,
    note: dbModel.note,
    id_image: dbModel.id_image,
  };
  return result;
}

export default {
  loadListaNormeStudio,
  loadRequisitiPerNorma,
};
