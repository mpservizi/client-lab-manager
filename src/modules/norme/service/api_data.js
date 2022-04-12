import http from 'src/http';
import { Requirement } from '../models/Requirement';

export async function loadListaAnalisi() {
  // let res = await http.get('https://jsonplaceholder.typicode.com/todos/1');
  // let url = 'http://localhost:3000/api/norme_study/';
  let result = localStorage.getItem('lista_norme');
  if (!result) {
    let url = '/api/norme_study/';
    let res = await http.get(url);
    let dati = res.data;
    if (dati.err) {
      console.log('Errore caricamento dati');
      return [];
    }
    localStorage.setItem('lista_norme', JSON.stringify(dati.data));
    result = dati.data;
  } else {
    result = JSON.parse(result);
  }
  return result;
}

export async function loadRequisitiPerNorma(idNorma) {
  let url = '/api/norme_study/' + idNorma;
  let res = await http.get(url);
  let dati = res.data;
  if (dati.err) {
    console.log('Errore caricamento dati');
    return [];
  }
  let norma = dati.data.norma;
  // id: 1;
  // idNorma: 1;
  // requirement: 'Requisito 1';
  let requisiti = dati.data.requisiti;
  let lista = [];
  requisiti.forEach((item) => {
    lista.push({ ...Requirement });
  });

  return lista;
}
