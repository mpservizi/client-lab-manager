import { pausa } from '@src/utils/util_dev';
import { IFormConfig } from './models/FormConfig';
import { INormaForm, getDefaultNorma } from './models/Norma';
import { TIPI_STANDARDS } from '@src/shared/Costanti';
import { creaTitoloNorma } from '@src/modules/norme/logic/funzioni';
import { FAKE_DB } from '@src/shared/FrontDb';

//Tabella comitees
const fakeComitees = FAKE_DB.TAB_COMITEES;
const fakeNorme = FAKE_DB.TAB_NORME;

async function getListaNorme() {
  let result: INormaForm[] = [];

  fakeNorme.forEach((item) => {
    let norma: INormaForm = getDefaultNorma();
    norma.id = item.id;
    norma.id_comitee = item.id_comitee;
    norma.prefix = item.prefix;
    norma.standard = item.standard;
    norma.tipo = item.tipo;
    norma.year = item.year;
    norma.title = item.title;
    norma.ammendments = item.ammendments;
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
  });
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
