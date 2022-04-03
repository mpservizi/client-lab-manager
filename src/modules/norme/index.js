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
export function initRouter(builder) {
  builder.addRoute('', 'pages/HomeView', NOMI_ROUTES.HOME);
  builder.addRoute('edit', 'pages/EditView', NOMI_ROUTES.EDIT);
  builder.addRoute('list', 'pages/RequirementsListView', NOMI_ROUTES.LISTA);
  builder.addRoute('new_analisi', 'pages/AddView', NOMI_ROUTES.NEW);
  return builder.build();
}
