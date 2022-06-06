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
import http from '@src/http';

//Resti api route
const ROUTE_NORME = '/api/norme';

function convertDbModelToUiModel(dbModel: INormaDb): INormaForm {
  let result: INormaForm = {
    id: dbModel.id,
    parent_id: parseInt(dbModel.parent_id as string) || undefined,
    status: dbModel.status,
    entry_date: MyDate.parseIsoDateStr(dbModel.entry_date),
    exit_date: MyDate.parseIsoDateStr(dbModel.exit_date),
    title: dbModel.title,
    tipo: dbModel.type,
    language: dbModel.language,
    format: dbModel.format,
    note: dbModel.comment,
    country: dbModel.country,
    folder: dbModel.folder as string,
    product_type: dbModel.product_type,
  };
  //In caso da campo vuoto database restituisce questo valore
  if (dbModel.exit_date == '1970-01-01T00:00:00Z') {
    result.exit_date = undefined;
  }
  return result;
}

function convertUiModelToDbModel(model: INormaForm): INormaDb {
  let result: INormaDb = {
    id: model.id,
    parent_id: model.parent_id,
    type: model.tipo,
    status: model.status,
    entry_date: MyDate.convertDateToStr(model.entry_date),
    exit_date: MyDate.convertDateToStr(model.exit_date),
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
  await pausa(10);
  return result;
}

//Get all
async function getListaNorme() {
  let result: INormaForm[] = [];
  let api_response = await http.get(ROUTE_NORME);
  let lista_norme = api_response.data.data;
  lista_norme.forEach((item: INormaDb) => {
    let norma: INormaForm = convertDbModelToUiModel(item);
    result.push(norma);
  });
  return result;
}

//Add new
async function salvaNorma(item: INormaForm) {
  let pojo: INormaDb = convertUiModelToDbModel(item);
  let api_response = await http.post(ROUTE_NORME, pojo);
  let payload_risposta = api_response.data;
  if (payload_risposta.err) {
    console.log('Errore aggiunta norma');
    console.log(payload_risposta.err);
    return null;
  }

  let result: INormaForm = convertDbModelToUiModel(pojo);
  return result;
}

//Edit
async function editNorma(item: INormaForm) {
  let pojo: INormaDb = convertUiModelToDbModel(item);
  let api_response = await http.patch(ROUTE_NORME, pojo);
  let payload_risposta = api_response.data;
  if (payload_risposta.err) {
    console.log('Errore modifica norma');
    console.log(payload_risposta.err);
    return null;
  }
  let result: INormaForm = convertDbModelToUiModel(pojo);
  return result;
}

async function deleteNorma(id_norma: number) {
  let result = DbHelper.deleteItemById(FAKE_DB.TAB_NORME, id_norma);
  return result;
}
async function getNormaById(id_norma: number) {
  let result = DbHelper.findOne(FAKE_DB.TAB_NORME, id_norma);
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
