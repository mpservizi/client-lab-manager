/**
 * Posto centralizzato per tutti i store del app
 */
import { defineStore } from 'pinia';
import HomeStore from 'src/modules/home/store.js';
import ReportsStore from 'src/modules/test-reports/store';
// export const MyStore = {
//   homeStore: defineStore('HomeStore', HomeStore),
// };

export const useHomeStore = defineStore('HomeStore', HomeStore);
export const useReportsStore = defineStore('ReportsStore', ReportsStore);
