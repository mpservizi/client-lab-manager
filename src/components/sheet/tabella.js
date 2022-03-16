import Handsontable from 'handsontable';
import 'handsontable/dist/handsontable.full.css';

export function initFoglio(container, payload) {
  const sh = new Handsontable(container, {
    // data: payload.data,
    // data: JSON.parse(JSON.stringify(payload.data)),
    colHeaders: true,
    height: 'auto',
    width: 'auto',
    minSpareRows: 1,
    licenseKey: 'non-commercial-and-evaluation',
    afterChange: handleChange,
  });
  window.sh = sh;

  function handleChange(changes) {
    if (!changes) return;
    changes.forEach((item) => {
      console.log(item);
      // Some logic...
    });
  }
  function setData(data) {
    sh.loadData(data);
  }
  function getData() {
    return sh.getSourceData();
  }
  return {
    setData,
    getData,
  };
}
