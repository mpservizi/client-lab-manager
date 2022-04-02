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

  return builder.build();
}
