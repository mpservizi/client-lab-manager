import { pausa } from '@src/utils/util_dev';
import { IFormConfig } from './models/FormConfig';
import { INormaForm, getDefaultNorma } from './models/Norma';
import { TIPI_STANDARDS, STATUS_NORMA } from '@src/shared/Costanti';
import { FAKE_DB, DbHelper } from '@src/shared/FrontDb';

async function getListaNorme() {
  let result: INormaForm[] = [];

  FAKE_DB.TAB_NORME.forEach((item) => {
    let norma: INormaForm = getDefaultNorma();
    norma.id = item.id;
    norma.tipo = item.tipo;
    norma.title = item.title;
    // norma.id_comitee = item.id_comitee;
    // norma.prefix = item.prefix;
    // norma.standard = item.standard;
    // norma.year = item.year;
    // norma.ammendments = item.ammendments;
    //Aggiungo titolo del comitee
    // let comitee = FAKE_DB.TAB_COMITEES.find(
    //   (item) => item.id == norma.id_comitee
    // );
    // norma.comitee_title = comitee.title;
    // norma.title = creaTitoloNorma(
    //   comitee.title,
    //   norma.standard,
    //   norma.year,
    //   norma.ammendments,
    //   norma.prefix
    // );

    result.push(norma);
  });
  await pausa(100);
  return result;
}

async function getConfigFormNorma() {
  const result: IFormConfig = {
    lista_comitee: getComitees(),
    tipi_norme: Object.values(TIPI_STANDARDS),
    tipi_status: Object.values(STATUS_NORMA),
  };
  await pausa(100);
  return result;
}

async function salvaNorma(item: INormaForm) {
  let result: INormaForm = { ...item };
  DbHelper.insertItem(FAKE_DB.TAB_NORME, result);
  await pausa(500);
  return result;
}
async function editNorma(item: INormaForm) {
  let result: INormaForm = { ...item };
  DbHelper.updateItem(FAKE_DB.TAB_NORME, result);
  await pausa(500);
  return result;
}
async function deleteNorma(id_norma: number) {
  let result = DbHelper.deleteItemById(FAKE_DB.TAB_NORME, id_norma);
  await pausa(500);
  return result;
}
//Ricavare questi dati dalla tabella
function getComitees() {
  return FAKE_DB.TAB_COMITEES;
}
export default {
  getListaNorme,
  getConfigFormNorma,
  salvaNorma,
  editNorma,
  deleteNorma,
};
