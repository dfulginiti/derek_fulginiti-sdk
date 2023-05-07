import { Client } from '../client/client';

export class Quote {
    private readonly name = 'quote';

    constructor(private client: Client) {}

    public async one<T>(id: string): Promise<T> {
        return this.client.fetch(`${this.name}/${id}`);
    }

    public async list<T>(): Promise<T> {
        return this.client.fetch(this.name);
    }

    public getName(): string {
        return this.name;
    }
}