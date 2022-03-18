import Handsontable from 'handsontable';
import 'handsontable/dist/handsontable.full.css';

/**
 * Inizializza la libreria per spreadsheet ed espone l'oggetto
 * @param {HTML} container : elemento dove caricare il foglio
 * @param {Object} payload : possibibili parametri
 * @returns
 */
export function initFoglio(container, payload) {
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

  const config = { ...payload, ...defaultConfig };
  const sh = new Handsontable(container, config);
  window.sh = sh;

  //Chiamato ad ogni cambiamento della cella
  function handleChange(changes) {
    if (!changes) return;
    // changes.forEach((item) => {
    //   console.log(item);
    // });
  }

  function setData(data) {
    sh.loadData(data);
  }

  function getData() {
    return sh.getSourceData();
  }

  function addRow(index, qty) {
    sh.alter('insert_row', index, qty);
  }
  /**
   * Imposta i titoli delle colonne
   * @param {Array | Object} labels
   */
  function setLabels(labels) {
    let campi = [];
    if (Array.isArray(labels)) {
      campi = labels;
    } else if (typeof labels === 'object') {
      campi = Object.keys(labels);
    }
    updateConfig({ colHeaders: campi });
  }

  function updateConfig(conf) {
    sh.updateSettings(conf);
  }
  return {
    setData,
    getData,
    setLabels,
    addRow,
  };
}
