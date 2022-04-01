import { Requirement } from './models/Requirement';

const dati = [
  {
    Chapter: 4,
    'Sub Chapter': 4,
    'Requirement type': 'Normative',
    Topic: 'General requirements',
    Requirement:
      'sockets with switch in series must comply with the requirements of DIN EN 60669-1:2019, sections 18 and 19 (breaking and normal operation) with reference to the rated current of the device ( socket)',
    Note: '',
    IdImage: '',
  },
  {
    Chapter: 6,
    'Sub Chapter': 6.1,
    'Requirement type': 'Normative',
    Topic: 'Ratings',
    Requirement:
      'Sockets with additional functions may be marked with a rated voltage of 230 V.\nThe tests of the socket part must, however, for a rated voltage of 250 V according to the standard sheet',
    Note: '',
    IdImage: '',
  },
  {
    Chapter: 6,
    'Sub Chapter': 6.3,
    'Requirement type': 'Normative',
    Topic: 'Ratings',
    Requirement: 'A degree of protection lower than IP20 is not permitted.',
    Note: '',
    IdImage: '',
  },
  {
    Chapter: 8,
    'Sub Chapter': 8.1,
    'Requirement type': 'Normative',
    Topic: 'Marking',
    Requirement:
      'Symbol for the degree of protection if it is greater than IP20;',
    Note: '',
    IdImage: '',
  },
  {
    Chapter: 8,
    'Sub Chapter': 8.11,
    'Requirement type': 'Normative',
    Topic: 'Marking',
    Requirement:
      'If products require installation instructions for specialists that cannot be assumed to be known to a specialist, these must be enclosed with the smallest sales unit.',
    Note: '',
    IdImage: '',
  },
  {
    Chapter: 8,
    'Sub Chapter': 8.12,
    'Requirement type': 'Normative',
    Topic: 'Marking',
    Requirement:
      'sockets with additional functions: the details of the additional function and labels are included (if applicable and necessary for use and operation by the user) to be specified on an instruction leaflet or on the product according to the component standard.',
    Note: '',
    IdImage: '',
  },
  {
    Chapter: 9,
    'Sub Chapter': 9.1,
    'Requirement type': 'Normative',
    Topic: 'Dimension',
    Requirement:
      'New roughness for standard gauges. Greater impact for the test with the "Lehren 2a" (200g)',
    Note: '',
    IdImage: '',
  },
  {
    Chapter: 9,
    'Sub Chapter': 9.3,
    'Requirement type': 'Normative',
    Topic: 'Dimension',
    Requirement:
      'If special mounting boxes are required for the installation of sockets, the manufacturer must provide the deliver the special  box in combination with the socket, or describe this special  box in the catalog / package',
    Note: '',
    IdImage: '',
  },
  {
    Chapter: 10,
    'Sub Chapter': '10.5.1',
    'Requirement type': 'Normative',
    Topic: 'Protection against electric shock',
    Requirement:
      'Lehre 13 (gauge 1mm 1N) must be applied both to the entry holes of the associated active contacts and to all other openings.',
    Note: '',
    IdImage: '',
  },
  {
    Chapter: 10,
    'Sub Chapter': '10.5.2',
    'Requirement type': 'Normative',
    Topic: 'Protection against electric shock',
    Requirement:
      'Lehre 15 (gauge 3mm 20N) must be applied both to the entry holes of the associated active contacts.',
    Note: '',
    IdImage: '',
  },
  {
    Chapter: 10,
    'Sub Chapter': '10.5.4',
    'Requirement type': 'Normative',
    Topic: 'Protection against electric shock',
    Requirement:
      "Single PIN with 40 N push on the shutter for 1 minut. Don't touch the live part",
    Note: '',
    IdImage: '',
  },
  {
    Chapter: 11,
    'Sub Chapter': 11.4,
    'Requirement type': 'Normative',
    Topic: 'Provision for earthing',
    Requirement:
      'additional earting terminals for plastic box socket > IPX0 unless the earthing terminal of the socket-outlet itself is so designed that it allows the connection of an incoming and an outgoing earthing conductor.\nIf is used a floatting terminal, must be conform to DIN EN 60998-2-1 or DIN EN 60998-2-2 or §12 of this standard (with the exception of § 12.2.8 or 12.3.9)',
    Note: '',
    IdImage: '',
  },
  {
    Chapter: 12,
    'Sub Chapter': '12.3.11',
    'Requirement type': 'Normative',
    Topic: 'Terminals and terminations',
    Requirement:
      'tests can now also be carried out with Current generator in DC',
    Note: '',
    IdImage: '',
  },
  {
    Chapter: 12,
    'Sub Chapter': '12.3.12',
    'Requirement type': 'Normative',
    Topic: 'Terminals and terminations',
    Requirement:
      'tests can now also be carried out with Current generator in DC',
    Note: '',
    IdImage: '',
  },
  {
    Chapter: 13,
    'Sub Chapter': 13.4,
    'Requirement type': 'Normative',
    Topic: '',
    Requirement:
      'Check  with sphere gauge and 120N for non-actuation of screwless levers (such as IEC 60669-1: 2017)',
    Note: '',
    IdImage: '',
  },
  {
    Chapter: 13,
    'Sub Chapter': 13.23,
    'Requirement type': 'Normative',
    Topic: 'test on membrane',
    Requirement: 'The test at -15°C now is mandatory',
    Note: '',
    IdImage: '',
  },
  {
    Chapter: 13,
    'Sub Chapter': 13.25,
    'Requirement type': 'Normative',
    Topic: 'Construction of fixed socket-outlets',
    Requirement:
      'Test on claws fix as w9r0144_01\nSame test condition as Belgian Standard',
    Note: '',
    IdImage: '',
  },
  {
    Chapter: 13,
    'Sub Chapter': 13.27,
    'Requirement type': 'Normative',
    Topic: 'Construction of fixed socket-outlets',
    Requirement:
      'Sockets with additional functions must meet the following requirements:\n- Transformers between the mains and SELV must meet the requirements of DIN EN 61558 (VDE 0570) (all parts);\n- overvoltage cat. III;\n- pollution degree 2;\n- Insulating material group: at least III b;\n- All air and creepage distances not described in the component standards must meet the requirements of DIN EN 60664 (VDE 0110) (all parts);\n- High voltage test between the network and SELV with 3 750 V.',
    Note: '',
    IdImage: '',
  },
  {
    Chapter: 16,
    'Sub Chapter': 16.2,
    'Requirement type': 'Normative',
    Topic:
      'Resistance to ageing, protection provided by enclosures, and resistance to humidity',
    Requirement:
      'Test wall: flat / brick / irregular brick. If nothing is declared by the manufacturer,  are used brick or irregular brick',
    Note: '',
    IdImage: '',
  },
  {
    Chapter: 16,
    'Sub Chapter': '16.2.2',
    'Requirement type': 'Normative',
    Topic:
      'Resistance to ageing, protection provided by enclosures, and resistance to humidity',
    Requirement: 'Test IPX4 and X5 is done only on front of porduct tested',
    Note: '',
    IdImage: '',
  },
  {
    Chapter: 16,
    'Sub Chapter': 16.4,
    'Requirement type': 'Normative',
    Topic:
      'Resistance to ageing, protection provided by enclosures, and resistance to humidity',
    Requirement:
      'Ageing resistance with mechanical stress: Shutter and esthetic parts should be removed before testing. Test at 70°C with pin of Ø 4,8 for 7 days. 4Days at temperature ambient standard. Remove the pin and test §22.2 (200g Ø 3,8)',
    Note: '',
    IdImage: '',
  },
  {
    Chapter: 17,
    'Sub Chapter': 17,
    'Requirement type': 'Normative',
    Topic: 'Insulation resistance and electric strength',
    Requirement:
      'Sockets with an additional function, the additional function must be disconnected if it would be influenced  the test of the socket part.',
    Note: '',
    IdImage: '',
  },
  {
    Chapter: 17,
    'Sub Chapter': 17.2,
    'Requirement type': 'Normative',
    Topic: 'Insulation resistance and electric strength',
    Requirement:
      'High voltage test at 4000V between the live part and the touchable surfaces that are not connected to the earth',
    Note: '',
    IdImage: '',
  },
  {
    Chapter: 19,
    'Sub Chapter': '19.1.1',
    'Requirement type': 'Normative',
    Topic: 'Temperature rise standard sockets',
    Requirement:
      'Without additional fuction: 22A for 4h or stability  (1°K/h)(limit:45°K)',
    Note: '',
    IdImage: '',
  },
  {
    Chapter: 19,
    'Sub Chapter': '19.1.2',
    'Requirement type': 'Normative',
    Topic: 'Temperature rise sockets with additional function',
    Requirement:
      'With additional fuction: The sockets are tested with rated current and in overload operation.',
    Note: '',
    IdImage: '',
  },
  {
    Chapter: 19,
    'Sub Chapter': '19.1.2.1',
    'Requirement type': 'Normative',
    Topic: 'Temperature rise sockets with additional function',
    Requirement:
      'Test with nominal current and additional fuction with nominal power (4h or stability) (limit:45°K on terminals and connection point  other limit in DIN EN 60669-2-1 tab 102 §17)',
    Note: '',
    IdImage: '',
  },
  {
    Chapter: 19,
    'Sub Chapter': '19.1.2.2',
    'Requirement type': 'Normative',
    Topic: 'Temperature rise sockets with additional function',
    Requirement:
      'Overload: 22A with additional fuction disconneted or short circuit (4h or stability) (limit:45°K)',
    Note: '',
    IdImage: '',
  },
  {
    Chapter: 19,
    'Sub Chapter': '19.1.2.2.1.1',
    'Requirement type': 'Normative',
    Topic: 'Temperature rise sockets with additional function',
    Requirement:
      'additional fuction on series and protection: test with max current which the integrated protective device just does not trigger (4h or stability) (55°K on terminal, for other component not normati 70°K other limit in DIN EN 60669-2-1 tab 102 §101)',
    Note: '',
    IdImage: '',
  },
  {
    Chapter: 19,
    'Sub Chapter': '19.1.2.2.1.2',
    'Requirement type': 'Normative',
    Topic: 'Temperature rise sockets with additional function',
    Requirement:
      'additional fuction on series without protection:  test 22A (4h or stability)   (55°K on terminal, for other component not normati 70°K other limit in DIN EN 60669-2-1 tab 102 §101)',
    Note: '',
    IdImage: '',
  },
  {
    Chapter: 19,
    'Sub Chapter': '19.1.2.2.2.1',
    'Requirement type': 'Normative',
    Topic: 'Temperature rise sockets with additional function',
    Requirement:
      'additional fuction on parallel and protection: 22A (I sockets+I additional fuction)(4h or stability)   (55°K on terminal, for other component not normati 70°K other limit in DIN EN 60669-2-1 tab 102 §101)',
    Note: '',
    IdImage: '',
  },
  {
    Chapter: 19,
    'Sub Chapter': '19.1.2.2.2.2',
    'Requirement type': 'Normative',
    Topic: 'Temperature rise sockets with additional function',
    Requirement:
      'additional fuction on parallel without protection: 22A (I sockets+I additional fuction)(4h or stability)   (55°K on terminal, for other component not normati 70°K other limit in DIN EN 60669-2-1 tab 102 §101)',
    Note: '',
    IdImage: '',
  },
  {
    Chapter: 19,
    'Sub Chapter': '19.1.2.2.3',
    'Requirement type': 'Normative',
    Topic: 'Temperature rise sockets with additional function',
    Requirement:
      'Sockets with fuse: test with 2X (I nominal fuse) and fuse is repleaced by a conductor (55°K on terminal, for other component not normati 70°K)',
    Note: '',
    IdImage: '',
  },
  {
    Chapter: 19,
    'Sub Chapter': 19.7,
    'Requirement type': 'Normative',
    Topic: 'Mating test',
    Requirement:
      'Test on 3 samples.I nominal/ 248 cycles (2h on/1h off) rimuovere la spina dopo un minimo di 8 cicli ed un massimo di 32) (ogni giorno escluso il week end)  per almeno 21 volte entro 5min dalla fine del Ton e subito dopo rinserita (T<45°K but is accept 1 temperature<55°K if the next <45°K)',
    Note: '',
    IdImage: '',
  },
  {
    Chapter: 20,
    'Sub Chapter': 20,
    'Requirement type': 'Normative',
    Topic: "breaking capacity (plug's pin spec.)",
    Requirement:
      'additional fuction must be disconnected for the test.\nTest with brass (CuZn39Pb2, cod CW612N or CuZn39Pb3 cod CW614) pin without surface treatment and Ø 4,8mm +0,06 and lenght 19mm+0,05',
    Note: '',
    IdImage: '',
  },
  {
    Chapter: 21,
    'Sub Chapter': 21,
    'Requirement type': 'Normative',
    Topic: 'normal operation',
    Requirement:
      'High voltage test at 3000V between the live part and the touchable surfaces that are not connected to the earth.\nsockets with an additional function, the additional function must be disconnected for this test.\nIn addition, the high-voltage test must be carried out on the disconnected additional component in accordance with the Component standard.',
    Note: '',
    IdImage: '',
  },
  {
    Chapter: 22,
    'Sub Chapter': 22.1,
    'Requirement type': 'Normative',
    Topic: 'Plug extraction force',
    Requirement:
      'New roughness for standard gauges. Greater impact for the test with the test of maximal extraction force "lehren',
    Note: '',
    IdImage: '',
  },
  {
    Chapter: 24,
    'Sub Chapter': 24.2,
    'Requirement type': 'Normative',
    Topic: 'test on lid ≥IP44',
    Requirement:
      'sockets with lid ip 44 or greater test of 5000 cycles with max freq 30 cycles at minute',
    Note: '',
    IdImage: '',
  },
  {
    Chapter: 24,
    'Sub Chapter': 24.21,
    'Requirement type': 'Normative',
    Topic: 'test on lid ≥IP44',
    Requirement:
      'Sockets with lid IP44 or greater test of traction with 50N 30s',
    Note: '',
    IdImage: '',
  },
  {
    Chapter: 26,
    'Sub Chapter': 26.8,
    'Requirement type': 'Normative',
    Topic: 'Screws, current-carrying parts and connections',
    Requirement:
      'Internal connection accepted:\n- screw terminals;\n- screwless terminals;\n- Solder, weld, crimp or equally effective connections;\n- Plug connections with loosening protection.\n\nWith weld the connection must be hold in position not only by welding',
    Note: '',
    IdImage: '',
  },
  {
    Chapter: 'annex E',
    'Sub Chapter': 'annex E',
    'Requirement type': 'Normative',
    Topic: 'mandatory information on label or small packagin',
    Requirement: 'mandatory information on label or small packagin',
    Note: '',
    IdImage: '1;2',
  },
];

//quanti valori caricare dal array dati in tabella
const NUM_ITEM_TO_LOAD = 5;

//converte i campi del csv in requirement
function csvInRequirement(payload) {
  let result = {
    [Requirement.chapter]: parseInt(payload['Chapter']),
    [Requirement.sub_chapter]: payload['Sub Chapter'],
    [Requirement.topic]: payload['Topic'],
    [Requirement.type_requirement]: payload['Requirement type'],
    [Requirement.requirement]: payload['Requirement'],
    [Requirement.note]: payload['Note'],
    [Requirement.id_image]: payload['IdImage'],
    [Requirement.id]: payload['id'],
  };
  return result;
}

let db = undefined;

//carica i dati dal db e fornisce alle view
async function loadDati() {
  //Se dati non sono mati stati caricati, primo avvio
  if (!db) {
    db = [];
    for (let i = 0; i < NUM_ITEM_TO_LOAD; i++) {
      const item = dati[i];
      //converto i  nomi delle colonne csv in nomi campi model
      let obj = csvInRequirement(item);
      obj[Requirement.id] = i + 1;
      db.push(obj);
    }
  }

  return Promise.resolve(db);
}

/**
 *
 * @param {*} item
 * @returns
 */
async function addItem(item) {
  let newItem = parseFormResult(item);
  let id = db.length + 1;
  newItem[Requirement.id] = id;
  db.push(newItem);
  return Promise.resolve(newItem);
}
/**
 *
 * @param {*} item
 * @returns
 */
function updateItem(item) {
  let result = null;
  let newItem = parseFormResult(item);
  let objIndex = findItemIndex(newItem);
  if (objIndex > -1) {
    db[objIndex] = newItem;
    result = db[objIndex];
  } else {
    console.log('Impossibile aggiornaril db, indece non trovato');
  }
  return Promise.resolve(result);
}

/**
 *
 * @param {*} item
 */
function deleteItem(item) {
  let result = false;
  let newItem = parseFormResult(item);
  let objIndex = findItemIndex(newItem);
  if (objIndex > -1) {
    db.splice(objIndex, 1);
    result = true;
  } else {
    console.log('Impossibile aggiornaril db, indece non trovato');
  }
  return Promise.resolve(result);
}

/**
 * Trova la posizone del oggeto in db
 * @param {*} item
 * @returns
 */
function findItemIndex(item) {
  let objIndex = db.findIndex(
    (obj) => obj[Requirement.id] == item[Requirement.id]
  );
  return objIndex;
}

//Converte il risultato dei campi del form in obj requirement pronto per salvare in db
function parseFormResult(payload) {
  let result = {
    [Requirement.chapter]: parseInt(payload[Requirement.chapter]),
    [Requirement.sub_chapter]: payload[Requirement.sub_chapter],
    [Requirement.topic]: payload[Requirement.topic],
    [Requirement.type_requirement]: payload[Requirement.type_requirement],
    [Requirement.requirement]: payload[Requirement.requirement],
    [Requirement.note]: payload[Requirement.note],
    [Requirement.id_image]: payload[Requirement.id_image],
    [Requirement.id]: parseInt(payload[Requirement.id]),
  };
  return result;
}

export default {
  loadDati,
  addItem,
  updateItem,
  deleteItem,
};
