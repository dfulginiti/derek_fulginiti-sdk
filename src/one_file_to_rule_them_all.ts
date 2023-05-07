import { Client } from './client/client'
import { Movie } from './resources/movie';
import { Quote } from './resources/quote'
import { MovieResponse } from './models/response/movie'
import { QuoteResponse } from './models/response/quote';

export class Lotr {
    private readonly client: Client;

    private readonly movieResource: Movie; 

    private readonly quoteResource: Quote;

    // the /book endpoint does not require an api key.
    // Please @see {@link https://the-one-api.dev/documentation} for more details.
    constructor(apiKey?: string) {
        this.client = new Client(apiKey);
        this.movieResource = new Movie(this.client);
        this.quoteResource = new Quote(this.client);
    }

    public async movie(id: string): Promise<MovieResponse> {
        return await this.movieResource.one(id);
    }

    public async movies(): Promise<MovieResponse[]> {
        return await this.movieResource.list();
    }

    public async movieQuotes(movieId: string): Promise<QuoteResponse[]> {
        return await this.movieResource.quotes(movieId);
    }

    public async quote(id: string): Promise<QuoteResponse> {
        return await this.quoteResource.one(id);
    }

    public async quotes(): Promise<QuoteResponse[]> {
        return await this.quoteResource.list();
    }
}