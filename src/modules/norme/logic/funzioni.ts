import { IComitee } from '../models/FormConfig';

/**
 * Crea il titolo della norma in base ai campi forniti
 * @param comitee
 * @param standard
 * @param year
 * @param ammendments
 * @param prefix
 * @returns
 */
export function creaTitoloNorma(
  comitee: string,
  standard: string,
  year: number,
  ammendments?: string,
  prefix?: string
) {
  let txt = `${comitee} ${standard}:${year}`;
  if (ammendments) {
    txt = `${txt}+${ammendments}`;
  }
  if (prefix) {
    txt = `${prefix} ${txt}`;
  }
  return txt.toUpperCase();
}

export function getComiteeByTitle(
  lista_comitee: Array<IComitee>,
  titolo: string
) {
  return lista_comitee.find((item) => item.title == titolo);
}

export function getComiteeById(lista_comitee: Array<IComitee>, id: number) {
  return lista_comitee.find((item) => item.id == id);
}
