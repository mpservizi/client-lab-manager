import { I_MySheet } from './interfacce';
import Handsontable from 'handsontable';
import 'handsontable/dist/handsontable.full.css';

export class MySheet implements I_MySheet {
  private sh: Handsontable;
  constructor(private container: any, payload: any) {
    loadLib();
    this.sh = new Handsontable(container, initConfig(payload));
  }
  setData(data: any) {
    this.sh.loadData(data);
  }
  getData() {
    return this.sh.getSourceData();
  }
  addRow(index: number, qty: number) {
    this.sh.alter('insert_row', index, qty);
  }
  setLabels(labels: any) {
    let campi = [];
    if (Array.isArray(labels)) {
      campi = labels;
    } else if (typeof labels === 'object') {
      campi = Object.keys(labels);
    }
    this.updateConfig({ colHeaders: campi });
  }
  updateConfig(conf: any) {
    this.sh.updateSettings(conf);
  }
}

function initConfig(payload: any) {
  const defaultConfig = {
    data: [],
    // data: JSON.parse(JSON.stringify(payload.data)),
    colHeaders: true,
    rowHeaders: false,
    height: 'auto',
    width: 'auto',
    minSpareRows: payload.righeVuote || 0, //numero di righe vuote da mostrare alla fine dei dati
    licenseKey: 'non-commercial-and-evaluation',
    afterChange: handleChange,
  };

  //Chiamato ad ogni cambiamento della cella
  function handleChange(changes) {
    if (!changes) return;
    // changes.forEach((item) => {
    //   console.log(item);
    // });
  }

  const config = { ...payload, ...defaultConfig };
  return config;
}

function loadLib() {
  const lib = import('handsontable');
  console.log(lib);
}
