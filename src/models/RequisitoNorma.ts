import { BaseModel } from './BaseModel';

const obj_campi = {
  id: 'ID',
  std_id: 'Std ID',
  std_code: 'Std Code',
  chapter: 'Chapter',
  sub_chapter: 'Sub Chapter',
  type_requirement: 'Requirement type',
  topic: 'Topic',
  requirement: 'Requirement',
  note: 'Note',
  id_image: 'IdImage',
};

export class RequisitoNormaModel extends BaseModel {
  public id: number;
  public std_id: number;
  public std_code: string;
  public chapter: string;
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
