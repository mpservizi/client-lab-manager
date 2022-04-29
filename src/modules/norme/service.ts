import { pausa } from '@src/utils/util_dev';
import { IFormConfig } from './models/FormConfig';
import { INormaForm, getDefaultNorma } from './models/Norma';
import { TIPI_STANDARDS } from '@src/shared/Costanti';
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
  item.id_comitee = 2;
  item.standard = `60500-${id}`;
  item.prefix = `MKT`;
  item.tipo = TIPI_STANDARDS.standard;
  return item;
}

async function getConfigFormNorma() {
  const result: IFormConfig = {
    lista_comitee: [
      { id: 1, title: 'IEC' },
      { id: 2, title: 'EN' },
      { id: 3, title: 'CEI' },
      { id: 4, title: 'IEC EN' },
    ],
    tipi_norme: Object.values(TIPI_STANDARDS),
  };
  await pausa(100);
  return result;
}

export default {
  getListaNorme,
  getConfigFormNorma,
};
