import { pausa } from '@src/utils/util_dev';
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

async function insertItem(item: IItemMonitor) {
  let result: IItemMonitor = { ...item };
  DbHelper.insertItem(FAKE_DB.TAB_STANDARD_MONITOR, result);
  await pausa(500);
  return result;
}
async function editItem(item: IItemMonitor) {
  let result: IItemMonitor = { ...item };
  DbHelper.updateItem(FAKE_DB.TAB_STANDARD_MONITOR, result);
  await pausa(500);
  return result;
}
async function deleteItem(id_item: number) {
  let result = DbHelper.deleteItemById(FAKE_DB.TAB_STANDARD_MONITOR, id_item);
  await pausa(500);
  return result;
}

export default {
  getLista,
  editItem,
  deleteItem,
  insertItem,
};
