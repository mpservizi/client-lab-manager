// I campi compilati nel form
export interface INormaForm {
  id: number;
  prefix: string;
  tipo: string;
  id_comitee: number;
  standard: string;
  year: number;
  ammendments: string;
  title: string;
}

export function getDefaultNorma(): INormaForm {
  let result = {
    id: 0,
    prefix: '',
    tipo: '',
    id_comitee: 0,
    standard: '',
    year: 2000,
    ammendments: '',
    title: '',
  };
  return result;
}
