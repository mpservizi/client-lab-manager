import { pausa } from '@src/utils/util_dev';
import { IFormConfig } from './models/FormConfig';
import { INormaForm, getDefaultNorma } from './models/Norma';
async function getListaNorme() {
  const tmpDati: INormaForm[] = [
    creaObjNorma(1),
    creaObjNorma(2),
    creaObjNorma(3),
    creaObjNorma(4),
  ];
  await pausa(100);
  return tmpDati;
}

function creaObjNorma(id: number) {
  let item = getDefaultNorma();
  item.id = id;
  item.standard = `60500-${id}`;
  item.prefix = `MKT`;
  return item;
}

async function getConfigFormNorma() {
  const result: IFormConfig = {
    listaComitee: [
      { id: 1, title: 'IEC' },
      { id: 2, title: 'EN' },
      { id: 3, title: 'CEI' },
      { id: 4, title: 'IEC EN' },
    ],
  };
  await pausa(100);
  return result;
}

export default {
  getListaNorme,
  getConfigFormNorma,
};
