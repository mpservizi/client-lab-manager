<script setup lang="ts">
import { dati_matrice } from './../dati_matrice';
import { estraiDatiCampoUnivoci } from '@src/utils/util_dev';
import { NormaModel } from '@src/models/Norma';
const listaProdotti = [
  {
    id: 1,
    range: 'Systo',
    family: 'Socket',
    terminal: 'Screwless',
    img: 'src/assets/logo.png',
  },
  {
    id: 2,
    range: 'Systo',
    family: 'Socket',
    terminal: 'Screw',
    img: 'src/assets/logo.png',
  },
  {
    id: 3,
    range: 'Gallery',
    family: 'Socket',
    terminal: 'Screwless',
    img: 'src/assets/logo.png',
  },
  {
    id: 4,
    range: 'Waterproof',
    family: 'Socket',
    terminal: 'Screwless',
    img: 'src/assets/logo.png',
  },
  {
    id: 5,
    range: 'Waterproof',
    family: 'Socket',
    terminal: 'Screwless',
    img: 'src/assets/logo.png',
  },
];
const listaRequisiti = [
  {
    id: 1,
    norma: 'IEC 60884-1',
    chapter: 8,
    sub_chapter: '8.1',
    requirement: 'Requirement 1',
  },
  {
    id: 2,
    norma: 'IEC 60884-1',
    chapter: 9,
    sub_chapter: '9.1',
    requirement: 'Requirement 2',
  },
  {
    id: 3,
    norma: 'IEC 60884-1',
    chapter: 10,
    sub_chapter: '10.5',
    requirement: 'Requirement 3',
  },
  {
    id: 4,
    norma: 'IEC 60884-1',
    chapter: 10,
    sub_chapter: '10.6',
    requirement: 'Requirement 4',
  },
  {
    id: 5,
    norma: 'IEC 60884-1',
    chapter: 12,
    sub_chapter: '12.3.12',
    requirement: 'Requirement 5',
  },
];

//Nome dei campi i dati matrice
const CAMPO_ID_REQUISITO = 'Requirement id';
const CAMPO_ID_PRODOTTO = 'Product id';
const CAMPO_RESULT = 'Result';
const CAMPO_ID_DOC = 'Doc';

let normaAttiva: NormaModel = new NormaModel();
normaAttiva.id = 1;
normaAttiva.title = 'IEC 60669-1:2017';

//Quanti tipi di morsetti mostrare per ogni prodotto
const tipi_terminals = ['Screwless', 'Screw', 'IPT'];
//Titoli delle colonne per i requsiti
const titoli_requisiti = ['Chapter', 'Requirement'];
//Classe da applicare per ogni cella che contiene titolo dei requisiti.
//Deve avere la stessa lunghezza di titoli_requisiti.
//Aggiungere '' per non applicare nessuna classe
const classi_titoli_colonne = [
  'cella_titolo_chapter',
  'cella_titolo_requisito',
];

let dati_tabella = creaDatiPerTabella(
  dati_matrice,
  listaRequisiti,
  listaProdotti
);

//@ts-ignore
window.d = dati_tabella;

function creaDatiPerTabella(dati: any[], requsiti: any[], prodotti: any[]) {
  let result = [];

  let idsRequisiti = estraiDatiCampoUnivoci(dati, CAMPO_ID_REQUISITO);

  idsRequisiti.forEach((id) => {
    //Tutti i dati del requisito
    let datiFiltrati = dati.filter((item) => item[CAMPO_ID_REQUISITO] == id);
    datiFiltrati.forEach((item) => {
      let idRequisito = item[CAMPO_ID_REQUISITO];
      let idProdotto = item[CAMPO_ID_PRODOTTO];
      let prodotto = prodotti.find((item) => item.id == idProdotto);
      let requisito = requsiti.find((item) => item.id == idRequisito);
      let record = {
        id_prodotto: idProdotto,
        sub_chapter: requisito.sub_chapter,
        requisito: requisito.requirement,
        terminal: prodotto.terminal,
        result: item[CAMPO_RESULT],
        doc: item[CAMPO_ID_DOC],
      };
      result.push(record);
    });
  });

  return result;
}
</script>
<template>
  <div>
    <div>
      <table class="tab_matrice">
        <thead>
          <!-- Riga 1 = Image -->
          <tr id="riga_img">
            <!-- colspan= numero delle colonne per i requsiiti -->
            <!-- rowspan= riga img + riga range -->
            <td
              class="cella_inizio"
              :colspan="titoli_requisiti.length"
              rowspan="2"
            >
              <h2>{{ normaAttiva.title }}</h2>
            </td>
            <!-- Una cella per ogni prodotto -->
            <td
              class="cella_img"
              :colspan="tipi_terminals.length"
              v-for="(item, index) in listaProdotti"
              :key="index"
            >
              <img :src="item.img" alt="" />
            </td>
          </tr>
          <!-- Riga 2 = Range -->
          <tr id="riga_range">
            <!-- Una cella per ogni range -->
            <td
              class="cella_range"
              :colspan="tipi_terminals.length"
              v-for="(item, index) in listaProdotti"
              :key="index"
            >
              {{ item.range }}
            </td>
          </tr>
          <!-- Riga 3 = Tipo terminale e titoli requisiti -->
          <tr id="riga_terminali">
            <!-- Copio i titoli dei requisiti -->
            <template v-for="(titolo, index) in titoli_requisiti" :key="titolo">
              <!-- titoli per colonne dei requsiti -->
              <td v-bind:class="classi_titoli_colonne[index]">
                {{ titolo }}
              </td>
            </template>

            <!-- Titoli per morsetti -->
            <!-- Copiare il gruppo per ogni prodotto -->
            <template v-for="(item, index) in listaProdotti" :key="index">
              <template v-for="(tipo, index) in tipi_terminals" :key="index">
                <td class="cella_terminal screw">{{ tipo }}</td>
              </template>
            </template>
          </tr>
        </thead>
        <tbody>
          <!-- Una riga per ogni record -->
          <tr
            class="riga_dati"
            v-for="(item, index) in dati_tabella"
            :key="index"
          >
            <!-- Dati requsiiti -->
            <td class="cella_dato">{{ item.sub_chapter }}</td>
            <td class="cella_dato">{{ item.requisito }}</td>
            <template v-for="prodotto in listaProdotti">
              <template v-if="prodotto.id == item.id_prodotto">
                <!-- Dati prodotto 1 -->
                <td class="cella_dato result">
                  <div v-if="item.terminal == 'Screw'">
                    <p>{{ item.result }}</p>
                    <p>{{ item.doc }}</p>
                  </div>
                  <div v-else>#</div>
                </td>
                <td class="cella_dato result">
                  <div v-if="item.terminal == 'Screwless'">
                    <p>{{ item.result }}</p>
                    <p>{{ item.doc }}</p>
                  </div>
                  <div v-else>#</div>
                </td>
                <td class="cella_dato result">
                  <div v-if="item.terminal == 'IPT'">
                    <p>{{ item.result }}</p>
                    <p>{{ item.doc }}</p>
                  </div>
                  <div v-else>#</div>
                </td>
              </template>
              <template v-else>
                <td>1-</td>
                <td>2-</td>
                <td>3-</td>
              </template>
            </template>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<style>
/* Intera tabella */
.tab_matrice {
  background-color: white;
  border-collapse: collapse;
}
/* Ogni cella nella tabella */
.tab_matrice td {
  border: 1px solid gray;
  text-align: center;
  width: 80px;
}
/* Prima cella della tabella */
td.cella_inizio {
  text-align: center;
}
/* Cella vuota */
td.cella_vuota {
  border: 0px;
}
/* Cella image prodtto */
td.cella_img {
  height: 80px;
}
/* Image del prodotto, ratio 4:3 */
td.cella_img img {
  max-height: 75px;
  max-width: 100px;
  min-width: 80px;
  min-height: 60px;
}
/* Titolo range */
td.cella_range {
  height: 30px;
  font-weight: 700;
}
/* Tipo di terminale */
td.cella_terminal {
  height: 30px;
}
/* Cella con i dati dei requisiti */
.tab_matrice.cella_dato {
  height: 50px;
}
/* Cella con i dati del prodotto */
td.cella_dato.result {
  height: 50px;
}
/* Titolo requsito */
td.cella_titolo_requisito {
  width: 200px;
}
/* Titolo chapter */
td.cella_titolo_chapter {
  min-width: 30px;
}
/* Celal con testo requisito, colonna 2 nella riga dati */
.riga_dati :nth-child(2) {
  text-align: left;
}
</style>
