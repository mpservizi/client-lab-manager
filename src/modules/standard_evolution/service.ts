import { pausa } from '@src/utils/util_dev';
import { FAKE_DB } from '@src/shared/FrontDb';
import { INormaStudio, getDefaultNormaStudio } from './models/NormaStudio';

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

export default {
  loadListaNormeStudio,
};
