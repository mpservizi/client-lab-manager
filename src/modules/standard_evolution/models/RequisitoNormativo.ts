export interface IRequisitoNormativo {
  id: number;
  id_norma: number;
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
    id: 0,
    id_norma: 0,
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
