/**
 * Transforma la prima lettera in maiuscolo della stringa indicata
 * @param {String} testo
 */
export function maiuscolaIniziale(testo: string) {
  const result = testo.charAt(0).toUpperCase() + testo.slice(1).toLowerCase();
  return result;
}

/**
 * Estrae il campo dal array di oggetti
 * @param {Array} dati :Array di oggetti
 * @param {String} campo : Nome del campo da estrarre per ogni oggetto
 */
export function estraiCampo(dati: object[], campo: string) {
  return dati.map((item) => item[campo]);
}

/**
 * Rimouve i dupplicati da un array di Strings
 * @param {Array} dati
 */
export function rimuoviDuplicati(dati: string[]) {
  const unique = [...new Set(dati)];
  return unique;
}

/**
 * Estrae i valori univoci del campo indicato, dal array di oggetti
 * @param {Array} dati :Array di oggetti
 * @param {String} campo : Nome del campo da estrarre per ogni oggetto
 */
export function estraiDatiCampoUnivoci(dati: any[], campo: string) {
  let valori = estraiCampo(dati, campo);
  return rimuoviDuplicati(valori);
}

/**
 * Filtra la lista di oggetti in base a più criteri
 * @param lista : lista da filtrare, non viene modificata dalla funzione
 * @param filter : oggetto contenete il campo e valor per cui filtrare
 * @returns
 */
export function filtraListaOggetti(lista: any[], filter: object): any[] {
  let numCriteri = Object.keys(filter).length;
  let result = lista.filter(function (item) {
    let criteri_ok = 0;
    let criterio = '';
    for (const key in filter) {
      criterio = filter[key];
      //Se criterio è vuoto oppure uguale al requisito
      if (criterio == '' || item[key] == criterio) {
        criteri_ok++;
      }
    }
    return criteri_ok == numCriteri;
  });

  return result;
}
/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
export function rndInRange(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

/**
 * Restiruisce un item casuale dal array
 * @param arr
 * @returns
 */
export function rndInArray(arr: any[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}
