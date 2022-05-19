import { pausa } from '@src/utils/util_dev';
import { FAKE_DB, DbHelper } from '@src/shared/FrontDb';
import { IItemMonitor, IItemMonitorDb } from './models/ItemMonitor';
import ServiceNorme from '@src/modules/norme/service';
import { MyDate } from '@src/helpers/MyDate';

async function getLista() {
  let result: IItemMonitor[] = [];
  //Liste delle norme
  let listaNorme = await ServiceNorme.getListaNorme();

  FAKE_DB.TAB_STANDARD_MONITOR.forEach((item) => {
    let obj: IItemMonitor = convertDbModelInUiModel(item);
    //Join sulla tabella norma
    obj.norma = listaNorme.find((norma) => norma.id == item.id_norma);
    //converto stringa in data
    obj.last_update = MyDate.parseDateFromStr(item.last_update);
    result.push(obj);
  });
  await pausa(100);
  return result;
}

function convertDbModelInUiModel(model: IItemMonitorDb) {
  let result: IItemMonitor = {
    id: model.id,
    id_norma: model.id_norma,
    norma: undefined,
    last_update: MyDate.parseDateFromStr(model.last_update),
    who: model.who,
    source: model.source,
    note: model.note,
  };
  return result;
}

function convertUiModelInDbModel(model: IItemMonitor) {
  let result: IItemMonitorDb = {
    id: model.id,
    id_norma: model.id_norma,
    last_update: MyDate.convertDateToStr(model.last_update),
    who: model.who,
    source: model.source,
    note: model.note,
  };
  return result;
}

async function insertItem(item: IItemMonitor) {
  let pojo = convertUiModelInDbModel(item);
  DbHelper.insertItem(FAKE_DB.TAB_STANDARD_MONITOR, pojo);
  let result: IItemMonitor = convertDbModelInUiModel(pojo);
  await pausa(500);
  return result;
}
async function editItem(item: IItemMonitor) {
  let pojo = convertUiModelInDbModel(item);
  DbHelper.updateItem(FAKE_DB.TAB_STANDARD_MONITOR, pojo);
  let result: IItemMonitor = convertDbModelInUiModel(pojo);
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
