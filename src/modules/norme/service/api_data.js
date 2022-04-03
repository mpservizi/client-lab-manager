import http from 'src/http';

export async function loadListaAnalisi() {
  let res = await http.get('https://jsonplaceholder.typicode.com/todos/1');
  let dati = res.data;
  return dati;
}
