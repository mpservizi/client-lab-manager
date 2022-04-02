export const NomiRoutes = {
  root: 'reports_root',
  new: 'reports_new',
  edit: 'reports_edit',
  detail: 'reports_detail',
};

/**
 * Crea il router per questo modulo
 * @param {*} builder : RouterBuilder per aggiungere i routes
 * @returns
 */
export function initRouter(builder) {
  builder.addRoute('', 'HomeView', NomiRoutes.root);
  builder.addRoute('new', 'AddView', NomiRoutes.new);
  builder.addRoute('edit', 'EditView', NomiRoutes.edit);
  builder.addRoute('detail', 'DetailView', NomiRoutes.detail);

  return builder.build();
}
