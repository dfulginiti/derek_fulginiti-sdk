import { Client } from '../client/client';
import { MovieResponse } from '../models/response/movie'
import { QuoteResponse } from '../models/response/quote'

export class Movie {
    private readonly name = 'movie';

    constructor(private client: Client) {}

    public async one(id: string): Promise<MovieResponse> {
        return this.client.fetch(`${this.name}/${id}`);
    }

    public async list<T>(): Promise<MovieResponse[]> {
        return this.client.fetch(this.name);
    }

    public async quotes<T>(id: string): Promise<QuoteResponse[]> {
        return this.client.fetch(`${this.name}/${id}`);
    }

    public getName(): string {
        return this.name;
    }
}