interface routeItem {
  path: string;
  component: any;
  name: string;
  props: boolean;
}

/**
 * Classe helper per creare il router per le pagine del view
 */
export class RouterBuilder {
  private list: Array<routeItem>;
  private nomi: Array<string>;
  /**
   *
   * @param {String} rootPath : Path parent per i vari routes
   * @param {String} folder : cartella che contiene le varie view
   */

  constructor(private rootPath: string, private folder: string) {
    this.list = [];
    this.nomi = [];
  }
  /**
   * Aggiunge nuovo route e aggiunge alla lista
   * @param {String} path : url --> /rootPath/path
   * @param {String} view : nome del view da mostrare, SENZA estenzione del file
   * @param {String} nome : nome da associare a questo route, se non indicato = /rootPath_view
   * Estenzione .vue aggiunta dal metodo, è una limitazione di Vite. I file devono sempre avere estenzione e path locale
   * Il percorso del file è relativo a questo file
   */
  addRoute(path: string, view: string, nome?: string): void {
    let item = this.createRoute(path, view, nome);
    this.addToList(item);
  }

  /**
   * Crea nuovo route, senza aggiungere alla lista. In questo modo è possibile personalizzare esternamente
   * @param {String} path : url --> /rootPath/path
   * @param {String} view : nome del view da mostrare, SENZA estenzione del file
   * @param {String} nome : nome da associare a questo route, se non indicato = /rootPath_view
   * Estenzione .vue aggiunta dal metodo, è una limitazione di Vite. I file devono sempre avere estenzione e path locale
   * Il percorso del file è relativo a questo file
   */
  createRoute(path: string, view: string, nome?: string): routeItem {
    let prefix = '/';
    if (this.rootPath != '') {
      prefix = this.rootPath;
    }
    let item = {
      path: `${prefix}${path}`,
      component: () => import(`./../modules/${this.folder}/${view}.vue`),
      name: nome || `${this.rootPath}_${view}`,
      props: true,
    };
    return item;
  }
  /**
   * Aggiunge il route indicato alla lista dei routes
   * item :{
      path: string;
      component: any;
      name: string;
      props: boolean;
    }
   */
  addToList(item: routeItem) {
    this.nomi.push(item.name);
    this.list.push(item);
  }
  /**
   * Crea array con elenco dei routes
   * @returns {Array}
   */
  build(): Array<routeItem> {
    return this.list;
  }

  listaNomi(): Array<string> {
    return this.nomi;
  }
}
