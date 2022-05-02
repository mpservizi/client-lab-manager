export interface IRequisitoNormativo {
  id: number | undefined;
  id_norma: number | undefined;
  chapter: string;
  sub_chapter: string;
  type_requirement: string;
  topic: string;
  requirement: string;
  note: string;
  id_image: string;
}
export interface IRequisitoNormativoDb {
  id: number;
  std_id: number;
  chapter: string;
  sub_chapter: string;
  type_requirement: string;
  topic: string;
  requirement: string;
  note: string;
  id_image: string;
}

export function getDefaultRequisitoNormativo(): IRequisitoNormativo {
  return {
    id: undefined,
    id_norma: undefined,
    chapter: '',
    sub_chapter: '',
    type_requirement: '',
    topic: '',
    requirement: '',
    note: '',
    id_image: '',
  };
}

export function getCampi() {
  return {
    id: 'id',
    id_norma: 'id_norma',
    chapter: 'chapter',
    sub_chapter: 'sub_chapter',
    type_requirement: 'type_requirement',
    topic: 'topic',
    requirement: 'requirement',
    note: 'note',
    id_image: 'id_image',
  };
}
