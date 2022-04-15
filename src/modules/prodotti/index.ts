/**
 * Wrapper per esporre i nomi dei routes in componenti
 */
export const NOMI_ROUTES = {
  HOME: 'home_prodotti',
};

/**
 * Crea il router per questo modulo
 * @param {*} builder : RouterBuilder per aggiungere i routes
 * @returns
 */
export function initRouter(modParams): any[] {
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
