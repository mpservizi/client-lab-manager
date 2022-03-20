interface routeItem {
  path: string;
  component: any;
}

/**
 * Classe helper per creare il router per le pagine del view
 */
export class RouterBuilder {
  private list: Array<routeItem>;
  /**
   *
   * @param {String} rootPath : Path parent per i vari routes
   * @param {String} folder : cartella che contiene le varie view
   */

  constructor(private rootPath: string, private folder: string) {
    this.list = [];
  }
  /**
   * Aggiunge nuovo route alla lista
   * @param {String} path : url --> /rootPath/path
   * @param {String} view : nome del view da mostrare, SENZA estenzione del file
   * Estenzione .vue aggiunta dal metodo, è una limitazione di Vite. I file devono sempre avere estenzione e path locale
   * Il percorso del file è relativo a questo file
   */
  addRoute(path: string, view: string): void {
    let item = {
      path: `${this.rootPath}/${path}`,
      component: () => import(`./../views/${this.folder}/${view}.vue`),
    };
    this.list.push(item);
  }

  /**
   * Crea array con elenco dei routes
   * @returns {Array}
   */
  build(): Array<routeItem> {
    return this.list;
  }
}
