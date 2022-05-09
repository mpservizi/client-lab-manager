import { pausa } from '@src/utils/util_dev';
import { TIPI_STANDARDS } from '@src/shared/Costanti';

import { FAKE_DB, DbHelper } from '@src/shared/FrontDb';

async function getLista() {
  let result = [];
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
