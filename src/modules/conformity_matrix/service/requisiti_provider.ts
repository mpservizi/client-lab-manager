const dati = [
  { 'Requirement id': 1, 'Product id': 1, Result: 'P', Doc: 'rp21lab0010' },
  { 'Requirement id': 1, 'Product id': 4, Result: 'P', Doc: 'rp21lab0011' },
  { 'Requirement id': 1, 'Product id': 2, Result: 'P', Doc: 'rp21lab0012' },
  { 'Requirement id': 1, 'Product id': 3, Result: 'P', Doc: 'rp21lab0013' },
  { 'Requirement id': 1, 'Product id': 5, Result: 'P', Doc: 'rp21lab0014' },
];

const datiRequisiti = [
  {
    id: 1,
    norma: 'IEC 60884-1',
    chapter: 8,
    sub_chapter: '8.1',
    requirement: 'Requirement 1',
  },
  {
    id: 2,
    norma: 'IEC 60884-1',
    chapter: 9,
    sub_chapter: '9.1',
    requirement: 'Requirement 2',
  },
  {
    id: 3,
    norma: 'IEC 60884-1',
    chapter: 10,
    sub_chapter: '10.5',
    requirement: 'Requirement 3',
  },
  {
    id: 4,
    norma: 'IEC 60884-1',
    chapter: 10,
    sub_chapter: '10.6',
    requirement: 'Requirement 4',
  },
  {
    id: 5,
    norma: 'IEC 60884-1',
    chapter: 12,
    sub_chapter: '12.3.12',
    requirement: 'Requirement 5',
  },
];

export function getRequisiti(idsRequisiti: number[]) {
  let listaRequisiti = [];
  idsRequisiti.forEach((id, index) => {
    listaRequisiti.push({
      id: id,
      norma: 'IEC 60884-1',
      chapter: 8,
      sub_chapter: '8.1',
      requirement: `Requirement ${index}`,
    });
  });
  return listaRequisiti;
}
function getRequisiti_bak(idsRequisiti: number[]) {
  let listaRequisiti = datiRequisiti.filter((item) =>
    idsRequisiti.includes(item.id)
  );
  return listaRequisiti;
}

export function getNormaRequisito() {
  let titoloNorma = 'IEC 60559-1:2015';
  return titoloNorma;
}
