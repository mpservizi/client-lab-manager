const dati = [
  {
    Id: 1,
    Range: 'Gallery',
    Family: 'Switch',
    Sub_Family: '1 way',
    Current: 10,
    Terminal: 'Screwless',
    Voltage: 250,
  },
  {
    Id: 2,
    Range: 'Gallery',
    Family: 'Switch',
    Sub_Family: '2 way',
    Current: 10,
    Terminal: 'Screwless',
    Voltage: 250,
  },
  {
    Id: 3,
    Range: 'Gallery',
    Family: 'Switch',
    Sub_Family: '2 pole',
    Current: 10,
    Terminal: 'Screwless',
    Voltage: 250,
  },
  {
    Id: 4,
    Range: 'Gallery',
    Family: 'Switch',
    Sub_Family: 'intermediate',
    Current: 10,
    Terminal: 'Screwless',
    Voltage: 250,
  },
  {
    Id: 5,
    Range: 'Gallery',
    Family: 'Switch',
    Sub_Family: '2 pole',
    Current: 16,
    Terminal: 'Screwless',
    Voltage: 250,
  },
  {
    Id: 6,
    Range: 'Systo',
    Family: 'Switch',
    Sub_Family: 'shutter',
    Current: 10,
    Terminal: 'Screwless',
    Voltage: 250,
  },
  {
    Id: 7,
    Range: 'Systo',
    Family: 'Socket',
    Sub_Family: 'Earth pin',
    Current: 16,
    Terminal: 'Screwless',
    Voltage: 250,
  },
  {
    Id: 8,
    Range: 'Systo',
    Family: 'Socket',
    Sub_Family: 'Earth resiliant',
    Current: 16,
    Terminal: 'Screwless',
    Voltage: 250,
  },
  {
    Id: 9,
    Range: 'Systo',
    Family: 'Socket',
    Sub_Family: 'Italian',
    Current: 16,
    Terminal: 'Screwless',
    Voltage: 250,
  },
  {
    Id: 10,
    Range: 'Systo',
    Family: 'Socket',
    Sub_Family: 'Italian',
    Current: 10,
    Terminal: 'Screwless',
    Voltage: 250,
  },
  {
    Id: 11,
    Range: 'Waterproof',
    Family: 'Switch',
    Sub_Family: '1 way',
    Current: 10,
    Terminal: 'Screw',
    Voltage: 250,
  },
  {
    Id: 12,
    Range: 'Waterproof',
    Family: 'Switch',
    Sub_Family: '2 way',
    Current: 10,
    Terminal: 'Screw',
    Voltage: 250,
  },
  {
    Id: 13,
    Range: 'Gallery',
    Family: 'Switch',
    Sub_Family: '2 pole',
    Current: 10,
    Terminal: 'Screw',
    Voltage: 250,
  },
  {
    Id: 14,
    Range: 'Gallery',
    Family: 'Switch',
    Sub_Family: 'intermediate',
    Current: 10,
    Terminal: 'Screw',
    Voltage: 250,
  },
  {
    Id: 15,
    Range: 'Gallery',
    Family: 'Switch',
    Sub_Family: '2 pole',
    Current: 16,
    Terminal: 'Screw',
    Voltage: 250,
  },
  {
    Id: 16,
    Range: 'Systo',
    Family: 'Socket',
    Sub_Family: 'Earth pin',
    Current: 16,
    Terminal: 'Screw',
    Voltage: 250,
  },
  {
    Id: 17,
    Range: 'Systo',
    Family: 'Socket',
    Sub_Family: 'Earth resiliant',
    Current: 16,
    Terminal: 'Screw',
    Voltage: 250,
  },
  {
    Id: 18,
    Range: 'Systo',
    Family: 'Socket',
    Sub_Family: 'Italian',
    Current: 16,
    Terminal: 'Screw',
    Voltage: 250,
  },
  {
    Id: 19,
    Range: 'Waterproof',
    Family: 'Switch',
    Sub_Family: 'shutter',
    Current: 10,
    Terminal: 'Screwless',
    Voltage: 250,
  },
];

import { Prodotto } from '@models/Prodotto';
import { rndInArray, rndInRange } from '@src/utils/util_dev';

let listaProdotti: Prodotto[] = undefined;

export function loadAllProdotti() {
  listaProdotti = undefined;
  listaProdotti = dati.map((item) => {
    let result = new Prodotto();
    result.id = item.Id;
    result.referenza = `WE0${rndInRange(100, 400)}`;
    result.id_classificaizone = rndInRange(1, 5);

    return result;
  });

  return listaProdotti;
}

export function loadProdottiByIds(idsProdotti: number[]) {
  if (!listaProdotti) {
    loadAllProdotti();
  }
  let result = listaProdotti.filter((item) => idsProdotti.includes(item.id));
  return result;
}

export function findProdottoById(idProdotto: number) {
  if (!listaProdotti) {
    loadAllProdotti();
  }
  return listaProdotti.find((item) => item.id == idProdotto);
}
