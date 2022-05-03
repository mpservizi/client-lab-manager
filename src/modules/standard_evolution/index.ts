import { ModuloParams } from '../mod_loader';

/**
 * Wrapper per esporre i nomi dei routes in componenti
 */
export const NOMI_ROUTES = {
  ENTRY: 'entry_stv_ev',
  HOME: 'home_stv_ev',
  EDIT: 'edit_stv_ev',
  ADD: 'add_stv_ev',
  LIST: 'lista_stv_ev',
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
      component: () => import('./pages/EntryView.vue'),
      name: NOMI_ROUTES.ENTRY,
      props: true,
      children: [
        {
          path: `home`,
          // @ts-ignore
          component: () => import('./pages/HomeView.vue'),
          name: NOMI_ROUTES.HOME,
          props: true,
        },
        {
          path: `list`,
          // @ts-ignore
          component: () => import('./pages/ListaRequisitiView.vue'),
          name: NOMI_ROUTES.LIST,
          props: true,
        },
        {
          path: `add`,
          // @ts-ignore
          component: () => import('./pages/AddRequirementView.vue'),
          name: NOMI_ROUTES.ADD,
          props: true,
        },
        {
          path: `edit`,
          // @ts-ignore
          component: () => import('./pages/EditView.vue'),
          name: NOMI_ROUTES.EDIT,
          props: true,
        },
      ],
    },
  ];

  return routes;
}
