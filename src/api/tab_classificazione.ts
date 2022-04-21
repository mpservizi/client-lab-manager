import { BaseTab } from './BaseTab';

export class TabClassificazione extends BaseTab {
  async getAll() {
    const URL_CLASSIFICAZIONE_PRODOTTI = `/api/classificazione`;
    const [err, data] = await this.getRequest(URL_CLASSIFICAZIONE_PRODOTTI);
    return data;
  }
}
