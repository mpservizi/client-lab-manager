import { MatrixModel } from '../models/MatrixModel';
import { loadDatiMatrice } from './dati_provider';
export function loadDati() {
  let dati = loadDatiMatrice();

  let result: MatrixModel[] = [];
  let item = new MatrixModel();
  item.dati = dati;
  item.norma = undefined;
}
