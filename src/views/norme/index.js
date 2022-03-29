/**
 * Crea il router per questo modulo
 * @param {*} builder : RouterBuilder per aggiungere i routes
 * @returns
 */
export function initRouter(builder) {
  builder.addRoute('', 'HomeView');
  builder.addRoute('new', 'AddView');
  builder.addRoute('edit', 'EditView');
  builder.addRoute('detail', 'DetailView');
  builder.addRoute('list', 'RequirementsListView');
  builder.addRoute('new_analisi', 'NewItemView');

  return builder.build();
}
