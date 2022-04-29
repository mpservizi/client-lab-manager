// I campi compilati nel form
export interface INormaForm {
  id: number | undefined;
  id_comitee: number | undefined;
  prefix: string;
  tipo: string;
  standard: string;
  year: number;
  ammendments: string;
  title: string;
}
//Campi da salvare il db per la norma
export interface INormaDb {
  id: number | undefined;
  id_comitee: number | undefined;
  prefix: string;
  tipo: string;
  standard: string;
  year: number;
  ammendments: string;
  title: string;
}

//Campi default per la norma
export function getDefaultNorma(): INormaForm {
  let result = {
    id: undefined,
    prefix: '',
    tipo: '',
    id_comitee: undefined,
    standard: '',
    year: 2000,
    ammendments: '',
    title: '',
  };
  return result;
}
