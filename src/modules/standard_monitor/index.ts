import { ModuloParams } from '../mod_loader';

/**
 * Wrapper per esporre i nomi dei routes in componenti
 */
export const NOMI_ROUTES = {
  ENTRY: 'entry_std_monitor',
  EDIT: 'edit_std_monitor',
  ADD: 'add_std_monitor',
  LIST: 'lista_std_monitor',
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
          path: `list`,
          // @ts-ignore
          component: () => import('./pages/ListView.vue'),
          name: NOMI_ROUTES.LIST,
          props: true,
        },
        {
          path: `edit`,
          // @ts-ignore
          component: () => import('./pages/EditView.vue'),
          name: NOMI_ROUTES.EDIT,
          props: true,
        },
        {
          path: `add`,
          // @ts-ignore
          component: () => import('./pages/StandardPicker.vue'),
          name: NOMI_ROUTES.ADD,
          props: true,
        },
      ],
    },
  ];

  return routes;
}
