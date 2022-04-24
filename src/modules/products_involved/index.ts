import { ModuloParams } from '../mod_loader';

/**
 * Wrapper per esporre i nomi dei routes in componenti
 */
export const NOMI_ROUTES = {
  HOME: 'home_products_involved',
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
      component: () => import('./pages/HomeView.vue'),
      name: NOMI_ROUTES.HOME,
      props: true,
    },
  ];

  return routes;
}
