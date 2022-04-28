import { pausa } from '@src/utils/util_dev';
import { IFormConfig } from './models/FormConfig';
async function getListaNorme() {
  const tmpDati = [
    { id: 1, title: 'Norma 1' },
    { id: 2, title: 'Norma 2' },
    { id: 3, title: 'Norma 3' },
    { id: 4, title: 'Norma 4' },
    { id: 5, title: 'Norma 5' },
  ];
  await pausa(100);
  return tmpDati;
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
