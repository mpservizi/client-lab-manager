/**
 * Wrapper per esporre i nomi dei routes in componenti
 */
export const NOMI_ROUTES = {
  HOME: 'home_homepage',
};

/**
 * Crea il router per questo modulo
 * @param {*} builder : RouterBuilder per aggiungere i routes
 * @returns
 */
export function initRouter(modParams) {
  const routes = [
    {
      path: '/',
      component: () => import('./HomeView.vue'),
      name: NOMI_ROUTES.HOME,
      props: true,
    },
  ];

  return routes;
}
