import { pausa } from '@src/utils/util_dev';
//Tabella comitees
const fakeComitees = [
  { id: 1, title: 'IEC' },
  { id: 2, title: 'EN' },
  { id: 3, title: 'CEI' },
  { id: 4, title: 'IEC EN' },
];

async function getListaNorme() {
  let result: any[] = [];
  await pausa(100);
  return result;
}

async function getConfigFormNorma() {
  const result: any = {
    lista_comitee: [],
    tipi_norme: [],
  };
  await pausa(100);
  return result;
}

export default {
  getListaNorme,
  getConfigFormNorma,
};
