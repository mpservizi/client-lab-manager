/**
 * Database fake usato per fornire i dati per lo sviluppo
 * Serivce dei vari moduli prendono dati da qui e creano la risposta per ui
 */
import {
  TIPI_STANDARDS,
  TIPI_REQUISITI_NORMATIVI,
  STATUS_NORMA,
  TIPI_FORMAT_NORMA,
} from './Costanti';
const TAB_COMITEES = [
  { id: 1, title: 'IEC' },
  { id: 2, title: 'EN' },
  { id: 3, title: 'CEI' },
  { id: 4, title: 'IEC EN' },
];
const TAB_NORME = [
  {
    id: 1,
    parent_id: undefined,
    status: STATUS_NORMA.in_application,
    entry_date: '01/02/2026',
    exit_date: undefined,
    title: 'DIN VDE 0620-1:2021',
    tipo: TIPI_STANDARDS.standard,
    language: 'DE',
    format: TIPI_FORMAT_NORMA.digital,
    note: '',
  },
  {
    id: 2,
    parent_id: undefined,
    status: STATUS_NORMA.obsolate,
    entry_date: '01/02/2008',
    exit_date: '01/03/2013',
    title: 'NF C 314-1:2006',
    tipo: TIPI_STANDARDS.standard,
    language: 'FR',
    format: TIPI_FORMAT_NORMA.paper_digital,
    note: '',
  },
  {
    id: 3,
    parent_id: undefined,
    status: STATUS_NORMA.in_application,
    entry_date: '02/02/2019',
    exit_date: undefined,
    title: 'IEC 60669-1:2017',
    tipo: TIPI_STANDARDS.standard,
    language: 'EN',
    format: TIPI_FORMAT_NORMA.paper_digital,
    note: '',
  },
  {
    id: 4,
    parent_id: undefined,
    status: STATUS_NORMA.obsolate,
    entry_date: '01/02/2003',
    exit_date: undefined,
    title: 'IEC 60884-2:2013',
    tipo: TIPI_STANDARDS.draft,
    language: 'EN',
    format: TIPI_FORMAT_NORMA.digital,
    note: '',
  },
];

const TAB_REQUISITI_NORMATIVI = [
  {
    id: 1,
    std_id: 1,
    chapter: '8',
    sub_chapter: '8.1',
    type_requirement: TIPI_REQUISITI_NORMATIVI.normative,
    topic: 'Topic 1',
    requirement: 'Requisito 1',
    note: 'Nota 1',
    id_image: '',
  },
  {
    id: 2,
    std_id: 1,
    chapter: '9',
    sub_chapter: '9.1',
    type_requirement: TIPI_REQUISITI_NORMATIVI.normative,
    topic: 'Topic 2',
    requirement: 'Requisito 2',
    note: 'Nota 2',
    id_image: '',
  },
  {
    id: 3,
    std_id: 2,
    chapter: '10',
    sub_chapter: '10.1',
    type_requirement: TIPI_REQUISITI_NORMATIVI.normative,
    topic: 'Topic 3',
    requirement: 'Requisito 3',
    note: 'Nota 3',
    id_image: '',
  },
  {
    id: 4,
    std_id: 3,
    chapter: '11',
    sub_chapter: '11.1',
    type_requirement: TIPI_REQUISITI_NORMATIVI.normative,
    topic: 'Topic 4',
    requirement: 'Requisito 4',
    note: 'Nota 4',
    id_image: '',
  },
  {
    id: 5,
    std_id: 3,
    chapter: '12',
    sub_chapter: '12.1',
    type_requirement: TIPI_REQUISITI_NORMATIVI.informative,
    topic: 'Topic 5',
    requirement: 'Requisito 5',
    note: 'Nota 5',
    id_image: '',
  },
  {
    id: 6,
    std_id: 4,
    chapter: '13',
    sub_chapter: '13.1',
    type_requirement: TIPI_REQUISITI_NORMATIVI.informative,
    topic: 'Topic 6',
    requirement: 'Requisito 6',
    note: 'Nota 6',
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

//Monitoraggio norme
const TAB_STANDARD_MONITOR = [
  {
    id: 1,
    id_norma: 1,
    last_update: '02/03/2021',
    who: 'Alberti Luigi',
    source: 'https://webstore.iec.ch/publication/2935',
    note: '',
  },
  {
    id: 2,
    id_norma: 2,
    last_update: '02/03/2021',
    who: 'Alberti Luigi',
    source: 'https://webstore.iec.ch/publication/2935',
    note: '',
  },
  {
    id: 3,
    id_norma: 2,
    last_update: '10/09/2021',
    who: 'Alberti Luigi',
    source: 'https://webstore.iec.ch/publication/2935',
    note: '',
  },
  {
    id: 4,
    id_norma: 3,
    last_update: '04/06/2021',
    who: 'Alberti Luigi',
    source: 'https://webstore.iec.ch/publication/2935',
    note: '',
  },
];

export const FAKE_DB = {
  TAB_CLASSIFICAZIONE,
  TAB_COMITEES,
  TAB_CONFORMITY_MATRIX,
  TAB_NORME,
  TAB_PRODOTTI,
  TAB_REQUISITI_NORMATIVI,
  TAB_STUDIO_NORME,
  TAB_STANDARD_MONITOR,
};

export const DbHelper = {
  getNewId(tabella: any[]) {
    return tabella.length + 1;
  },
  findOne(tabella: any[], id: number) {
    return tabella.find((obj) => obj.id == id);
  },
  //Return object with new id
  insertItem(tabella: any[], item: any) {
    let result = { ...item };
    result.id = tabella.length + 1;
    tabella.push(result);
    return result;
  },
  //Return true or false
  updateItem(tabella: any[], item: any) {
    let itemIndex = tabella.findIndex((obj) => obj.id == item.id);
    if (itemIndex > -1) {
      tabella[itemIndex] = { ...item };
    }
    return itemIndex > -1;
  },
  //Return true or false
  deleteItem(tabella: any[], item: any) {
    let itemIndex = tabella.findIndex((obj) => obj.id == item.id);
    if (itemIndex > -1) {
      tabella.splice(itemIndex, 1);
    }
    return itemIndex > -1;
  },
  deleteItemById(tabella: any[], id: number) {
    let itemIndex = tabella.findIndex((obj) => obj.id == id);
    if (itemIndex > -1) {
      tabella.splice(itemIndex, 1);
    }
    return itemIndex > -1;
  },
};
