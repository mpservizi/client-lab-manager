import { BaseModel } from '@models/BaseModel';
import { NormaModel } from '@models/Norma';
import { RequisitoNormaModel } from '@models/RequisitoNorma';
import { Prodotto } from '@src/models/Prodotto';
import { IRecordDbMatrice } from './../interfacce/IRecordDbMatrice';
const obj_campi = {
  norma: '',
  prodotto: '',
  requisito: '',
  record: '',
};

export class MatrixItemModel extends BaseModel {
  public norma: NormaModel;
  public requisito: RequisitoNormaModel;
  public prodotto: Prodotto;
  public record: IRecordDbMatrice;

  static getCampi(): MatrixItemModel {
    let result = new MatrixItemModel();
    BaseModel.copiaCampiInValori(result, obj_campi);
    return result;
  }
}
