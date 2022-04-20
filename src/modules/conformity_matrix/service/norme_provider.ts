const norme = [
  {
    id: 1,
    status: 'In application',
    type: 'Standard',
    entry_date: '01/08/2009',
    end_date: '13/02/2021',
    country: 'European',
    product_type: 'Switch',
    tech_comitee: 'EN',
    title: 'EN 60669-1:2000-05 +A1.2003-06 +A2-2009-08',
    storage: 1,
    language: 'EN',
    note: '',
  },
];

export function findNormaById(idNorma: number) {
  let titoloNorma = 'IEC 60559-1:2015';
  let norma = norme[0];
  norma.id = idNorma;
  norma.title = titoloNorma;
  return norma;
}
