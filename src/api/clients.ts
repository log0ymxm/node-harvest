import Harvest from '../index';
import { ClientsPagenationParameters, Client } from '../models/clients.models';

// Admin permissions required, except when retrieving the currently authenticated client.
export class ClientsAPI {
  harvest: Harvest;
  baseUrl: string;

  constructor(harvest: Harvest) {
    this.baseUrl = '/v2/clients';
    this.harvest = harvest;
  }

  public get(id: number) {
    return this.harvest.request('GET', `${this.baseUrl}/${id}`);
  }

  public list(query: ClientsPagenationParameters = {}) {
    return this.harvest.request('GET', this.baseUrl, query);
  }

  public create(client: Client) {
    return this.harvest.request('POST', this.baseUrl, client);
  }

  public update(id: number, data: any) {
    return this.harvest.request('PATCH', `${this.baseUrl}/${id}`, data);
  }

  public delete(id: number) {
    return this.harvest.request('DELETE', `${this.baseUrl}/${id}`);
  }
}
