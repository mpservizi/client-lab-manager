import { ClassificazioneProdotto } from '@src/models/ClassificazioneProdotto';
import { dati } from './../dati';
async function _loadprodotti() {
  let result = dati.map(convertInModel);
  return Promise.resolve(result);
}

function convertInModel(item: any) {
  let result = new ClassificazioneProdotto();
  result.range = item['Range'];
  result.family = item['Family'];
  result.sub_family = item['Sub_Family'];
  result.current = item['Current'];
  result.terminal = item['Terminal'];
  result.voltage = item['Voltage'];
  result.id = item['Id'];
  return result;
}

export default {
  loadProdotti: _loadprodotti,
};
