//@ts-ignore
const moment = window.moment;
const FORMATI = {
  DD_MM_YYYY: 'DD/MM/YYYY',
  YYYY_MM_DD: 'YYYY/MM/DD',
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
 * Converte la data in testo
 */
function convertDateToStr(
  data: Date,
  formato: string = FORMATI.DD_MM_YYYY
): string {
  let str = moment(data).format(formato);
  return str;
}
export const MyDate = {
  FORMATI,
  parseDateFromStr,
  convertDateToStr,
};
