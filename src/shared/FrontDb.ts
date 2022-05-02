/**
 * Database fake usato per fornire i dati per lo sviluppo
 * Serivce dei vari moduli prendono dati da qui e creano la risposta per ui
 */
import { TIPI_STANDARDS } from './Costanti';
const TAB_COMITEES = [
  { id: 1, title: 'IEC' },
  { id: 2, title: 'EN' },
  { id: 3, title: 'CEI' },
  { id: 4, title: 'IEC EN' },
];
const TAB_NORME = [
  {
    id: 1,
    id_comitee: 1,
    prefix: 'MKT',
    tipo: TIPI_STANDARDS.draft,
    standard: '60669-1',
    year: 2017,
    ammendments: '2022-07',
    title: 'MKT IEC 60669-1:2017+2022-07',
  },
  {
    id: 2,
    id_comitee: 2,
    prefix: 'MKT',
    tipo: TIPI_STANDARDS.standard,
    standard: '60669-2',
    year: 2014,
    ammendments: '',
    title: 'MKT EN 60669-1:2017',
  },
  {
    id: 3,
    id_comitee: 3,
    prefix: 'EN',
    tipo: TIPI_STANDARDS.standard,
    standard: '23-50',
    year: 1999,
    ammendments: '2001-07+2003-08+2018-03',
    title: 'EN CEI 60669-1:2017+2001-07+2003-08+2018-03',
  },
  {
    id: 4,
    id_comitee: 1,
    prefix: '',
    tipo: TIPI_STANDARDS.standard,
    standard: '60884-1',
    year: 2013,
    ammendments: '',
    title: 'IEC 60884-1',
  },
];

const TAB_REQUISITI_NORMATIVI = [
  {
    id: '',
    std_id: '',
    std_code: '',
    chapter: '',
    sub_chapter: '',
    type_requirement: '',
    topic: '',
    requirement: '',
    note: '',
    id_image: '',
  },
];

const TAB_PRODOTTI = [
  {
    id: '',
    id_classificaizone: '',
    referenza: '',
  },
];
//Dati per classificazione del prodotto
const TAB_CLASSIFICAZIONE = [
  {
    id: '',
    range: '',
    family: '',
    sub_family: '',
    terminal: '',
    voltage: '',
    current: '',
  },
];

//Conformità prodotti
const TAB_CONFORMITY_MATRIX = [
  {
    id: 0,
    id_requisito: 0,
    id_prodotto: 0,
    doc: '',
    result: '',
    status: '',
    note: '',
    last_update: '',
  },
];

// Attuale standard list
const STANDARD_LIST = [
  {
    id: '',
    std_code: '',
    parent_id: '',
    status: '',
    entry_to_force: '',
    valid_until: '',
    applied_in_abplast: '',
    country: '',
    product_category: '',
    tech_committee: '',
    std_ref_code: '',
    pubblication: '',
    edition: '',
    title: '',
    base_title: '',
    storage_container: '',
    language: '',
    format: '',
    note: '',
    last_standard_check_date: '',
  },
];

//Status studio norme
const TAB_STUDIO_NORME = [
  { id_norma: 1, status: 'In Progress' },
  { id_norma: 2, status: 'In Progress' },
  { id_norma: 3, status: 'TBD' },
  { id_norma: 4, status: 'Done' },
];
export const FAKE_DB = {
  TAB_CLASSIFICAZIONE,
  TAB_COMITEES,
  TAB_CONFORMITY_MATRIX,
  TAB_NORME,
  TAB_PRODOTTI,
  TAB_REQUISITI_NORMATIVI,
  TAB_STUDIO_NORME,
};
