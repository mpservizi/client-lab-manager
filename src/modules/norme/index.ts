import { ModuloParams } from '../mod_loader';

/**
 * Wrapper per esporre i nomi dei routes in componenti
 */
export const NOMI_ROUTES = {
  ENTRY: 'entry_norme',
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
      component: () => import('./pages/EntryNormeView.vue'),
      name: NOMI_ROUTES.ENTRY,
      props: true,
      children: [
        {
          path: `list`,
          // @ts-ignore
          component: () => import('./pages/ListaNormeView.vue'),
          name: NOMI_ROUTES.LIST,
          props: true,
        },
        {
          path: `add`,
          // @ts-ignore
          component: () => import('./pages/AddNormaView.vue'),
          name: NOMI_ROUTES.ADD,
          props: true,
        },
        {
          path: `edit`,
          // @ts-ignore
          component: () => import('./pages/EditNormaView.vue'),
          name: NOMI_ROUTES.EDIT,
          props: true,
        },
      ],
    },
  ];

  return routes;
}
