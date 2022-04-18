<script setup lang="ts">
import { estraiDatiCampoUnivoci } from '@src/utils/util_dev';
import { NormaModel } from '@src/models/Norma';

const dati_matrice = [];
const listaProdotti = [
  { id: 1, range: 'Systo', family: 'Socket', terminal: 'Screwless' },
  { id: 2, range: 'Systo', family: 'Socket', terminal: 'Screw' },
  { id: 3, range: 'Gallery', family: 'Socket', terminal: 'Screwless' },
  { id: 4, range: 'Waterproof', family: 'Socket', terminal: 'Screwless' },
  { id: 5, range: 'Waterproof', family: 'Socket', terminal: 'Screwless' },
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

let normaAttiva: NormaModel = new NormaModel();
normaAttiva.id = 1;
normaAttiva.title = 'IEC 60669-1:2017';

let idsProdotti = estraiDatiCampoUnivoci(dati_matrice, 'Product id');
</script>
<template>
  <div>
    <div>
      <table class="tab_matrice">
        <thead>
          <tr id="riga_img">
            <!-- colspan= numero delle colonne per i requsiiti -->
            <!-- rowspan= riga img + riga range -->
            <td class="cella_inizio" colspan="2" rowspan="2">
              <h2>{{ normaAttiva.title }}</h2>
            </td>
            <!-- Una cella per ogni prodotto -->
            <!-- Prodotto 1 -->
            <td class="cella_img" colspan="3">
              <img src="src/assets/logo.png" alt="" />
            </td>
            <!-- Prodotto 2 -->
            <td class="cella_img" colspan="3">
              <img src="src/assets/logo.png" alt="" />
            </td>
          </tr>
          <tr id="riga_range">
            <!-- Una cella per ogni range -->
            <td class="cella_range" colspan="3">Systo</td>
            <td class="cella_range" colspan="3">Gallery</td>
          </tr>
          <tr id="riga_terminali">
            <!-- titoli per colonne dei requsiti -->
            <td class="cella_chapter">Chapter</td>
            <td class="cella_requisito">Requisito 1</td>
            <!-- Titoli per morsetti -->
            <!-- Copiare il gruppo per ogni prodotto -->
            <!-- Prodotto 1 -->
            <td class="cella_terminal screw">Screw</td>
            <td class="cella_terminal screwless">Screwless</td>
            <td class="cella_terminal ipt">IPT</td>
            <!-- Prodotto 2 -->
            <td class="cella_terminal screw">Screw</td>
            <td class="cella_terminal screwless">Screwless</td>
            <td class="cella_terminal ipt">IPT</td>
          </tr>
        </thead>
        <tbody>
          <!-- Una riga per ogni record -->
          <tr class="riga_dati">
            <!-- Dati requsiiti -->
            <td class="cella_dato">4.1.2</td>
            <td class="cella_dato">Prova dela fdlksajfd dsajdas lkjlad</td>
            <!-- Dati prodotto 1 -->
            <td class="cella_dato result">Screw 1</td>
            <td class="cella_dato result">Screwless 1</td>
            <td class="cella_dato result">Ipt 1</td>
            <!-- Dati prodotto 2 -->
            <td class="cella_dato result">Screw 2</td>
            <td class="cella_dato result">Screwless 2</td>
            <td class="cella_dato result">Ipt 2</td>
          </tr>
          <!-- Una riga per ogni record -->
          <tr class="riga_dati">
            <!-- Dati requsiiti -->
            <td class="cella_dato">4.1.2</td>
            <td class="cella_dato">Prova dela fdlksajfd dsajdas lkjlad</td>
            <!-- Dati prodotto 1 -->
            <td class="cella_dato result">Screw 1</td>
            <td class="cella_dato result">Screwless 1</td>
            <td class="cella_dato result">Ipt 1</td>
            <!-- Dati prodotto 2 -->
            <td class="cella_dato result">Screw 2</td>
            <td class="cella_dato result">Screwless 2</td>
            <td class="cella_dato result">Ipt 2</td>
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
td.cella_requisito {
  width: 200px;
}
/* Titolo chapter */
td.cella_chapter {
  min-width: 30px;
}
/* Celal con testo requisito, colonna 2 nella riga dati */
.riga_dati :nth-child(2) {
  text-align: left;
}
</style>
