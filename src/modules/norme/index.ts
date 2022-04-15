import { ModuloParams } from '../mod_loader';

/**
 * Wrapper per esporre i nomi dei routes in componenti
 */
export const NOMI_ROUTES = {
  HOME: 'home_analisi_norme',
  EDIT: 'edit_analisi_norme',
  LISTA: 'lista_analisi_norme',
  NEW: 'new_analisi_norme',
};

/**
 * Crea il router per questo modulo
 * @param {*} builder : RouterBuilder per aggiungere i routes
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
    {
      path: `${modParams.path}/edit`,
      // @ts-ignore
      component: () => import('./pages/EditView.vue'),
      name: NOMI_ROUTES.EDIT,
      props: true,
    },
    {
      path: `${modParams.path}/list`,
      // @ts-ignore
      component: () => import('./pages/RequirementsListView.vue'),
      name: NOMI_ROUTES.LISTA,
      props: true,
    },
    {
      path: `${modParams.path}/new_analisi`,
      // @ts-ignore
      component: () => import('./pages/AddView.vue'),
      name: NOMI_ROUTES.NEW,
      props: true,
    },
  ];

  return routes;
}
