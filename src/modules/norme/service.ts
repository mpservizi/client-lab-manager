import { pausa } from '@src/utils/util_dev';
import { IFormConfig } from './models/FormConfig';
import { INormaForm, INormaDb } from './models/Norma';
import {
  TIPI_STANDARDS,
  STATUS_NORMA,
  TIPI_FORMAT_NORMA,
} from '@src/shared/Costanti';
import { FAKE_DB, DbHelper } from '@src/shared/FrontDb';
import { MyDate } from '@src/helpers/MyDate';

async function getListaNorme() {
  let result: INormaForm[] = [];

  FAKE_DB.TAB_NORME.forEach((item: INormaDb) => {
    let norma: INormaForm = convertDbModelToUiModel(item);
    result.push(norma);
  });
  await pausa(100);
  return result;
}

function convertDbModelToUiModel(dbModel: INormaDb): INormaForm {
  let result: INormaForm = {
    id: dbModel.id,
    parent_id: parseInt(dbModel.parent_id as string) || undefined,
    status: dbModel.status,
    entry_date: MyDate.parseDateFromStr(dbModel.entry_date),
    exit_date: dbModel.exit_date,
    title: dbModel.title,
    tipo: dbModel.type,
    language: dbModel.language,
    format: dbModel.format,
    note: dbModel.comment,
    country: dbModel.country,
    folder: dbModel.folder as string,
    product_type: dbModel.product_type,
  };
  return result;
}

function convertUiModelToDbModel(model: INormaForm): INormaDb {
  let result: INormaDb = {
    id: model.id,
    parent_id: model.parent_id,
    type: model.tipo,
    status: model.status,
    entry_date: MyDate.convertDateToStr(model.entry_date),
    exit_date: model.exit_date,
    country: model.country,
    product_type: model.product_type,
    title: model.title,
    folder: model.folder,
    language: model.language,
    format: model.format,
    comment: model.note,
  };
  return result;
}

async function getConfigFormNorma() {
  const result: IFormConfig = {
    tipi_norme: Object.values(TIPI_STANDARDS),
    tipi_status: Object.values(STATUS_NORMA),
    tipi_format_norme: Object.values(TIPI_FORMAT_NORMA),
  };
  await pausa(100);
  return result;
}

async function salvaNorma(item: INormaForm) {
  let pojo: INormaDb = convertUiModelToDbModel(item);
  DbHelper.insertItem(FAKE_DB.TAB_NORME, pojo);
  let result: INormaForm = convertDbModelToUiModel(pojo);
  await pausa(500);
  return result;
}
async function editNorma(item: INormaForm) {
  let pojo: INormaDb = convertUiModelToDbModel(item);
  DbHelper.updateItem(FAKE_DB.TAB_NORME, pojo);
  let result: INormaForm = convertDbModelToUiModel(pojo);
  await pausa(500);
  return result;
}
async function deleteNorma(id_norma: number) {
  let result = DbHelper.deleteItemById(FAKE_DB.TAB_NORME, id_norma);
  await pausa(500);
  return result;
}
async function getNormaById(id_norma: number) {
  let result = DbHelper.findOne(FAKE_DB.TAB_NORME, id_norma);
  await pausa(500);
  return result;
}

export default {
  getListaNorme,
  getConfigFormNorma,
  salvaNorma,
  editNorma,
  deleteNorma,
  getNormaById,
};
