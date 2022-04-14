export class BaseModel {
  //Copia le chiavi del oggetto item nel oggetto target e imposta il valore = al campo
  //Se per creare un oggetto con i valori uguali alle chiavi
  protected static copiaCampiInValori(target: any, item: any) {
    Object.keys(item).forEach((campo) => {
      target[campo] = campo;
    });
  }
  //Implementare nella classe
  static getCampi() {
    return {};
  }
}
