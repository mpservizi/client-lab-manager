import { IItemMonitorDb } from '@src/modules/standard_monitor/models/ItemMonitor';
import raw_standard_monitor from './standard_monitor';
import raw_standard_list from './standard_list';
import { INormaDb } from '@src/modules/norme/models/Norma';
export function getStandardMonitorList() {
  let result: IItemMonitorDb[] = [];
  raw_standard_monitor.forEach((item, index) => {
    let pojo: IItemMonitorDb = {
      id: index,
      id_norma: item.id_norma,
      last_update: item.last_update,
      who: item.author,
      source: item.source,
      note: item.note,
    };
    result.push(pojo);
  });
  return result;
}

export function getNorme() {
  let result: INormaDb[] = [];
  raw_standard_list.forEach((item, index) => {
    let pojo: INormaDb = {
      id: item.id,
      parent_id: item.parent_id,
      type: item.type,
      status: item.status,
      entry_date: item.entry_date,
      exit_date: item.exit_date,
      country: item.country,
      product_type: item.product_type,
      title: item.title,
      folder: item.folder,
      language: item.language,
      format: item.format,
      comment: item.comment,
    };
    result.push(pojo);
  });
  return result;
}
