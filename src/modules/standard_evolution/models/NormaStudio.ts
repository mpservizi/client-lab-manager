/**
 * Item da mostrare nella lista per lo studio delle norme
 */
export interface INormaStudio {
  id_norma: number; //Id delle norma
  title_norma: string;
  status: string;
}
/**
 * Campi da salvare nel db
 */
export interface INormaStudioDb {
  id_norma: number; //Id delle norma
  status: string;
}

export function getDefaultNormaStudio(): INormaStudio {
  return {
    id_norma: 0,
    title_norma: '',
    status: '',
  };
}

export function getCampi() {
  return {
    id_norma: 'id_norma',
    title_norma: 'title_norma',
    status: 'status',
  };
}
