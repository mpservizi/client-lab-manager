//@ts-ignore
const moment = window.moment;
const FORMATI = {
  DD_MM_YYYY: 'DD/MM/YYYY',
  YYYY_MM_DD: 'YYYY/MM/DD',
  ISO_STR: 'YYYY-MM-DDTHH:mm:ssZ',
};

/**
 * Converte il testo in data
 */
function parseDateFromStr(
  str: string,
  formato: string = FORMATI.DD_MM_YYYY
): Date {
  const parsed = moment(str, formato);
  let output = parsed.toDate();
  return output;
}

/**
 * Converte il testo fornito in fomato iso in data.
 * Usato per convertire la data del DB SQL in data javascript
 */
function parseIsoDateStr(str: string): Date {
  const parsed = moment(str, FORMATI.ISO_STR);
  let data_str = parsed.format(FORMATI.DD_MM_YYYY);
  let output = parseDateFromStr(data_str, FORMATI.DD_MM_YYYY);
  return output;
}

/**
 * Converte la data in testo
 */
function convertDateToStr(
  data: Date,
  formato: string = FORMATI.DD_MM_YYYY
): string {
  let str = moment(data).format(formato);
  return str;
}
/**
 * Converte la data in testo Iso
 * Usato per salvare la data in db SQL
 */
function convertDateToIsoStr(data: Date): string {
  let str = moment(data).format(FORMATI.ISO_STR);
  return str;
}
export const MyDate = {
  FORMATI,
  parseDateFromStr,
  convertDateToStr,
  parseIsoDateStr,
  convertDateToIsoStr,
};
