/**
 * Transforma la prima lettera in maiuscolo della stringa indicata
 * @param {String} testo
 */
export function maiuscolaIniziale(testo) {
  const result = testo.charAt(0).toUpperCase() + testo.slice(1).toLowerCase();
  return result;
}

/**
 * Estrae il campo dal array di oggetti
 * @param {Array} dati :Array di oggetti
 * @param {String} campo : Nome del campo da estrarre per ogni oggetto
 */
export function estraiCampo(dati, campo) {
  return dati.map((item) => item[campo]);
}

/**
 * Rimouve i dupplicati da un array di Strings
 * @param {Array} dati
 */
export function rimuoviDuplicati(dati) {
  const unique = [...new Set(dati)];
  return unique;
}

/**
 * Estrae i valori univoci del campo indicato, dal array di oggetti
 * @param {Array} dati :Array di oggetti
 * @param {String} campo : Nome del campo da estrarre per ogni oggetto
 */
export function estraiDatiCampoUnivoci(dati, campo) {
  let valori = estraiCampo(dati, campo);
  return rimuoviDuplicati(valori);
}
