// I campi compilati nel form
export interface INormaForm {
  id: number;
  prefix: string;
  tipo: string;
  id_comitee: number;
  comitee: string;
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
    comitee: '',
    standard: '',
    year: 2000,
    ammendments: '',
    title: '',
  };
  return result;
}
