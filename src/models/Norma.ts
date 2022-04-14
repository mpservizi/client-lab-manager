import { BaseModel } from './BaseModel';

const obj_campi = {
  id: '',
  std_code: '',
  parent_id: '',
  status: '',
  entry_to_force: '',
  valid_until: '',
  applied_in_abplast: '',
  country: '',
  product_category: '',
  tech_committee: '',
  std_ref_code: '',
  pubblication: '',
  edition: '',
  title: '',
  base_title: '',
  storage_container: '',
  language: '',
  format: '',
  note: '',
  last_standard_check_date: '',
};

export class NormaModel extends BaseModel {
  public id: number;
  public std_code: string;
  public parent_id: string;
  public status: string;
  public entry_to_force: string;
  public valid_until: string;
  public applied_in_abplast: string;
  public country: string;
  public product_category: string;
  public tech_committee: string;
  public std_ref_code: string;
  public pubblication: string;
  public edition: string;
  public title: string;

  static getCampi(): NormaModel {
    let result = new NormaModel();
    BaseModel.copiaCampiInValori(result, obj_campi);
    return result;
  }
}
