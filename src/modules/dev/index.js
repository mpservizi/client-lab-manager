/**
 * Crea il router per questo modulo
 * @param {*} builder : RouterBuilder per aggiungere i routes
 * @returns
 */
export function initRouter(modParams) {
  const routes = [
    {
      path: '/',
      component: () => import('./Debug.vue'),
      name: 'debug_page',
      props: true,
    },
  ];

  return routes;
}
