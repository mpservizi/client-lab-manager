import { BaseModel } from '@models/BaseModel';
import { NormaModel } from '@models/Norma';
import { RequisitoNormaModel } from '@models/RequisitoNorma';
import { Prodotto } from '@src/models/Prodotto';
import { IRecordDbMatrice } from './../interfacce/IRecordDbMatrice';
const obj_campi = {
  norma: '',
  requisito: '',
  dati: '',
};

export class MatrixModel extends BaseModel {
  public norma: NormaModel;
  public requisito: RequisitoNormaModel;
  public prodotto: Prodotto;
  public dati: IRecordDbMatrice[];

  static getCampi(): MatrixModel {
    let result = new MatrixModel();
    BaseModel.copiaCampiInValori(result, obj_campi);
    return result;
  }
}
