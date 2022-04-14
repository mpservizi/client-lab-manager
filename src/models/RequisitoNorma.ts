import { BaseModel } from './BaseModel';

export const TipiRequisito = {
  NORMATIVE: 'Normative',
  INFORMATIVE: 'Informative',
  OTHER: 'Other',
};

const obj_campi = {
  id: '',
  std_id: '',
  std_code: '',
  chapter: '',
  sub_chapter: '',
  type_requirement: '',
  topic: '',
  requirement: '',
  note: '',
  id_image: '',
};

export class RequisitoNormaModel extends BaseModel {
  public id: number;
  public std_id: number;
  public std_code: string;
  public chapter: number;
  public sub_chapter: string;
  public type_requirement: string;
  public topic: string;
  public requirement: string;
  public note: string;
  public id_image: string;

  static getCampi(): RequisitoNormaModel {
    let result = new RequisitoNormaModel();
    BaseModel.copiaCampiInValori(result, obj_campi);
    return result;
  }
}
