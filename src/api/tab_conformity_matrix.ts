import { BaseTab } from './BaseTab';

export class TabConformityMatrix extends BaseTab {
  async getRecordsByIdNorma(idNorma: number) {
    const URL_MATRICE_PER_NORMA = `/api/conformity_matrix?normaId=${idNorma}`;
    const [err, data] = await this.getRequest(URL_MATRICE_PER_NORMA);
    return data;
  }
}
