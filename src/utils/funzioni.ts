/**
 * Calcola il motiplicatore da usare per calcolare il workload
 * @param numProve : numero di prove/campioni da testare
 * @param sampleCapacity : capacity della risorsa per gestire contemporaneamente le prove/campioni
 * @returns : numero intero oppure 0 in caso di errore
 */
export function calcolaCapacityFactor(
  numProve: number,
  sampleCapacity: number
): number {
  let result = 0;

  if (numProve < 1) return result;
  if (sampleCapacity < 1) return result;

  let div = numProve / sampleCapacity;
  if (div < 1) {
    result = 1;
  } else {
    result = Math.ceil(div);
  }

  return result;
}
