export class MySheet {
  constructor(container, payload) {
    this.sh = new Handsontable(container, initConfig(payload));
  }
  setData(data) {
    this.sh.loadData(data);
  }
  getData() {
    return this.sh.getSourceData();
  }
  addRow(index, qty) {
    this.sh.alter('insert_row', index, qty);
  }
  setLabels(labels) {
    let campi = [];
    if (Array.isArray(labels)) {
      campi = labels;
    } else if (typeof labels === 'object') {
      campi = Object.keys(labels);
    }
    this.updateConfig({ colHeaders: campi });
  }
  updateConfig(conf) {
    this.sh.updateSettings(conf);
  }
}

function initConfig(payload) {
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
