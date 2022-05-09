import { pausa } from '@src/utils/util_dev';
import { TIPI_STANDARDS } from '@src/shared/Costanti';

import { FAKE_DB, DbHelper } from '@src/shared/FrontDb';
import { IItemMonitor, getDefaultModel } from './models/ItemMonitor';
import ServiceNorme from '@src/modules/norme/service';

async function getLista() {
  let result: IItemMonitor[] = [];
  //Liste delle norme
  let listaNorme = await ServiceNorme.getListaNorme();

  FAKE_DB.TAB_STANDARD_MONITOR.forEach((item) => {
    let obj: IItemMonitor = getDefaultModel();
    Object.assign(obj, item);
    //Join sulla tabella norma
    obj.norma = listaNorme.find((norma) => norma.id == item.id_norma);

    result.push(obj);
  });
  await pausa(100);
  return result;
}

// async function salvaNorma(item: INormaForm) {
//   let result: INormaForm = { ...item };
//   DbHelper.insertItem(FAKE_DB.TAB_NORME, result);
//   await pausa(500);
//   return result;
// }
// async function editNorma(item: INormaForm) {
//   let result: INormaForm = { ...item };
//   DbHelper.updateItem(FAKE_DB.TAB_NORME, result);
//   await pausa(500);
//   return result;
// }
// async function deleteNorma(id_norma: number) {
//   let result = DbHelper.deleteItemById(FAKE_DB.TAB_NORME, id_norma);
//   await pausa(500);
//   return result;
// }

export default {
  getLista,
};
