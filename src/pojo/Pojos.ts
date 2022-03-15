export class Prova {
  public id: string;
  public idCategoria: string;
  public titolo: string;
}
export class CategoriaProva {
  public id: string;
  public titolo: string;
}
export class CategoriaRisorsa {
  public id: string;
  public titolo: string;
}
export class Risorsa {
  public id: string;
  public idCategoria: string;
  public titolo: string;
}
export class WorkloadProva {
  public id: string;
  public idCategoriaProva: string;
  public idCategoriaRisorsa: string;
  public tempo: number;
  public sampleCapacity: number;
}
