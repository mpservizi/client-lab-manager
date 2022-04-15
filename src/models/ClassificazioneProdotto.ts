import { BaseModel } from './BaseModel';

const obj_campi = {
  id: '',
  range: '',
  family: '',
  sub_family: '',
  terminal: '',
  voltage: '',
  current: '',
};

export class ClassificazioneProdotto extends BaseModel {
  public id: number;
  public range: string;
  public family: string;
  public sub_family: string;
  public terminal: string;
  public voltage: string;
  public current: string;

  static getCampi(): ClassificazioneProdotto {
    let result = new ClassificazioneProdotto();
    BaseModel.copiaCampiInValori(result, obj_campi);
    return result;
  }
}
