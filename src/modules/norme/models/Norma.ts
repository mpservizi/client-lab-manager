// I campi compilati nel form
export interface INormaForm {
  id: number | undefined;
  parent_id: number | undefined;
  status: string;
  entry_date: Date | undefined;
  exit_date: string;
  title: string;
  tipo: string;
  language: string;
  format: string;
  note: string;
  country: string;
  folder: string;
  product_type: string;
}
//Campi da salvare il db per la norma
export interface INormaDb {
  id: number | undefined;
  parent_id: number | string | undefined;
  type: string;
  status: string;
  entry_date: string; //Scegliere come salvare le date in Db
  exit_date: string;
  country: string;
  product_type: string;
  title: string;
  folder: number | string | undefined;
  language: string;
  format: string;
  comment: string;
}

//Campi default per la norma
export function getDefaultNorma(): INormaForm {
  let result: INormaForm = {
    id: undefined,
    parent_id: undefined,
    status: '',
    entry_date: undefined,
    exit_date: '',
    title: '',
    tipo: '',
    language: '',
    format: '',
    note: '',
    folder: '',
    country: '',
    product_type: '',
  };
  return result;
}
