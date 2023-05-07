import { QuoteResponse } from '../models/response/quote'
import { Resource } from './resource';

export class Movie extends Resource {
    protected readonly name = 'movie';

    public async quotes<T>(id: string): Promise<QuoteResponse[]> {
        return this.client.fetch(`${this.name}/${id}`);
    }
}