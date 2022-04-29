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
