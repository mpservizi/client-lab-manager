/**
 * Crea il router per questo modulo
 * @param {*} builder : RouterBuilder per aggiungere i routes
 * @returns
 */
export function initRouter(builder) {
  builder.addRoute('', 'Debug');

  return builder.build();
}
