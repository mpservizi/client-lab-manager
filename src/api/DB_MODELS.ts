/** Record tabella Norme */
export interface Norma {
  id: number;
  title: string;
}
/** Record tabella Classificazione prodotti */
export interface Classificazione {
  id: number;
  family: string;
  sub_family: string;
  terminal: string;
  voltage: number | string;
  current: number | string;
}
/** Record tabella Prodotti */
export interface Prodotto {
  id: number;
  classificazioneId: number;
  range: string;
  img: string | number;
}
/** Record tabella Requisiti Normativi */
export interface Requisito {
  id: number;
  normaId: number;
  chapter: number;
  sub_chapter: string | number;
  requirement: string;
}
/** Record tabella Matrice Conformity */
export interface ConformityMatrix {
  id: number;
  requisitoId: number;
  prodottoId: number;
  doc: string;
  esito: string;
  stato: string;
  note: string;
}
/** Record con dati esterni inclusi */
export interface ProdottoWithExternal extends Prodotto {
  classificazione: Classificazione;
}
/** Record con dati esterni inclusi */
export interface RequisitoWithExternal extends Requisito {
  norma: Norma;
}
/** Record con dati esterni inclusi */
export interface ConformityMatrixWithExternal extends ConformityMatrix {
  requisito: RequisitoWithExternal;
  prodotto: ProdottoWithExternal;
}
