import { ModuloParams } from '../mod_loader';

/**
 * Wrapper per esporre i nomi dei routes in componenti
 */
export const NOMI_ROUTES = {
  ENTRY: 'debug_entry',
  DIALOG: 'debug_dialog',
  FILTRO_LISTA: 'debug_filtro_lista',
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
          path: `dialog`,
          // @ts-ignore
          component: () => import('./pages/Dialog.vue'),
          name: NOMI_ROUTES.DIALOG,
          props: true,
        },
        {
          path: `filtro_lista`,
          // @ts-ignore
          component: () => import('../../composables/FiltroLista.vue'),
          name: NOMI_ROUTES.FILTRO_LISTA,
          props: true,
        },
      ],
    },
  ];

  return routes;
}
