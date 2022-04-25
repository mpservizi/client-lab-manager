import { ModuloParams } from '../mod_loader';

/**
 * Wrapper per esporre i nomi dei routes in componenti
 */
export const NOMI_ROUTES = {
  EDIT: 'edit_norme',
  ADD: 'add_norme',
  LIST: 'lista_norme',
};

/**
 * Crea il router per questo modulo
 * @returns
 */
export function initRouter(modParams: ModuloParams): any[] {
  const routes = [
    {
      path: `${modParams.path}`,
      // @ts-ignore
      component: () => import('./pages/ListaNormeView.vue'),
      name: NOMI_ROUTES.LIST,
      props: true,
    },
    {
      path: `${modParams.path}add`,
      // @ts-ignore
      component: () => import('./pages/AddNormaView.vue'),
      name: NOMI_ROUTES.ADD,
      props: true,
    },
    {
      path: `${modParams.path}edit`,
      // @ts-ignore
      component: () => import('./pages/EditNormaView.vue'),
      name: NOMI_ROUTES.EDIT,
      props: true,
    },
  ];

  return routes;
}
