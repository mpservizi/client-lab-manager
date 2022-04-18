import { BaseModel } from './BaseModel';

const obj_campi = {
  id: '',
  id_classificaizone: '',
  referenza: '',
};

export class Prodotto extends BaseModel {
  public id: number;
  public id_classificaizone: number;
  public referenza: string;

  static getCampi(): Prodotto {
    let result = new Prodotto();
    BaseModel.copiaCampiInValori(result, obj_campi);
    return result;
  }
}
