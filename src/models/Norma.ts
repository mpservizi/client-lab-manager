export class NormaModel {
  public id: string;
  public titolo: string;
  public status: string;

  pojo() {
    let keys = Object.keys(this);
    console.log(keys);
  }
}
export const TABELLA_DB = {
  tabella: 'norme',
  id: 'ID',
  std_code: 'Std Code',
  parent_id: 'Parent Id',
  status: 'Status',
  entry_to_force: 'Entry to force',
  valid_until: 'Valid until',
  applied_in_abplast: 'Applied in AbPlast',
  country: 'Country',
  product_category: 'Product category',
  tech_committee: 'Tech committee',
  std_ref_code: 'Std ref code',
  pubblication: 'Pubblication',
  edition: 'Edition',
  title: 'Title',
  base_title: 'Base title',
  storage_container: 'Storage container',
  language: 'Language',
  format: 'Format',
  note: 'Note',
  last_standard_check_date: 'Last standard check date',
};
export const TABELLA_DB_STUDIO_NORME = {
  tabella: 'studio_norme',
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
