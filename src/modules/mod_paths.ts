import { NOMI_ROUTES as conformity_matrixRoutes } from './conformity_matrix';
import { NOMI_ROUTES as dashboardRoutes } from './dashboard';
import { NOMI_ROUTES as normeRoutes } from './norme';
import { NOMI_ROUTES as prodottiRoutes } from './prodotti';
import { NOMI_ROUTES as studio_normeRoutes } from './studio_norme';
import { NOMI_ROUTES as products_involvedRoutes } from './products_involved';
import { NOMI_ROUTES as standard_evolutionRoutes } from './standard_evolution';

export const APP_PATHS = {
  norme: normeRoutes,
  prodotti: prodottiRoutes,
  studio_norme: studio_normeRoutes,
  dashboard: dashboardRoutes,
  conformity_matrix: conformity_matrixRoutes,
  products_involved: products_involvedRoutes,
  standard_evolution: standard_evolutionRoutes,
};
