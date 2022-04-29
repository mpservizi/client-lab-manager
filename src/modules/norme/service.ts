import { pausa } from '@src/utils/util_dev';
import { IFormConfig } from './models/FormConfig';
import { INormaForm, getDefaultNorma } from './models/Norma';
import { TIPI_STANDARDS } from '@src/shared/Costanti';
import { creaTitoloNorma } from '@src/modules/norme/logic/funzioni';
//Tabella comitees
const fakeComitees = [
  { id: 1, title: 'IEC' },
  { id: 2, title: 'EN' },
  { id: 3, title: 'CEI' },
  { id: 4, title: 'IEC EN' },
];

async function getListaNorme() {
  let result: INormaForm[] = [];
  for (let i = 1; i < 5; i++) {
    let norma = creaObjNorma(i);
    //Aggiungo titolo del comitee
    let comitee = fakeComitees.find((item) => item.id == norma.id_comitee);
    norma.comitee_title = comitee.title;
    norma.title = creaTitoloNorma(
      comitee.title,
      norma.standard,
      norma.year,
      norma.ammendments,
      norma.prefix
    );

    result.push(norma);
  }
  await pausa(100);
  return result;
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
    lista_comitee: getComitees(),
    tipi_norme: Object.values(TIPI_STANDARDS),
  };
  await pausa(100);
  return result;
}

//Ricavare questi dati dalla tabella
function getComitees() {
  return fakeComitees;
}
export default {
  getListaNorme,
  getConfigFormNorma,
};
