import http from '@src/http';
export class BaseTab {
  protected async getRequest(url: string, payload?: any) {
    let response = await http.get(url, payload);
    return this.sendRisposta(response);
  }
  protected async postRequest(url: string, payload: any) {
    let response = await http.post(url, payload);
    return this.sendRisposta(response);
  }
  protected async putRequest(url: string, payload: any) {
    let response = await http.put(url, payload);
    return this.sendRisposta(response);
  }
  protected async patchRequest(url: string, payload: any) {
    let response = await http.patch(url, payload);
    return this.sendRisposta(response);
  }
  protected async deleteRequest(url: string, payload: any) {
    let response = await http.delete(url, payload);
    return this.sendRisposta(response);
  }

  private sendRisposta(response: any) {
    let err = null;
    let result = null;
    result = response.data;
    return [err, result];
  }
}
