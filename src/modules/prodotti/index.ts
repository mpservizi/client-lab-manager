import { ModuloParams } from '../mod_loader';

/**
 * Wrapper per esporre i nomi dei routes in componenti
 */
export const NOMI_ROUTES = {
  HOME: 'home_prodotti',
  MATRICE: 'matrice_prodotti',
};

/**
 * Crea il router per questo modulo
 * @returns
 */
export function initRouter(modParams: ModuloParams): any[] {
  const routes = [
    {
      path: modParams.path,
      // @ts-ignore
      // component: () => import('./pages/HomeView.vue'),
      component: () => import('./pages/Flexbox.vue'),
      name: NOMI_ROUTES.HOME,
      props: true,
    },
    {
      path: `${modParams.path}/matrice`,
      // @ts-ignore
      component: () => import('./pages/Matrice.vue'),
      name: NOMI_ROUTES.MATRICE,
      props: true,
    },
  ];

  return routes;
}
