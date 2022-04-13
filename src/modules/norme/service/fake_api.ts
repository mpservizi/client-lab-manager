const Norma_Model = {
  idNorma: 'ID',
  norma: 'Titolo',
  stato: 'Status norma',
};
import { NormaModel } from '@models/Norma';

export function loadListaNormeAnalizzate(): Promise<NormaModel[]> {
  let result = [];
  for (let i = 1; i < 6; i++) {
    let item = new NormaModel();
    item.id = `ID ${i}`;
    item.titolo = `Norma ${i}`;
    item.status = `Stato ${i}`;
    result.push(item);
  }

  return Promise.resolve(result);
}
