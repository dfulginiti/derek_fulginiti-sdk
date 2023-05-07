import { Client } from '../client/client';

export abstract class Resource {
    protected abstract readonly name: string;

    constructor(protected client: Client) {}

    public async one<T>(id: string): Promise<T> {
        return this.client.fetch(`${this.name}/${id}`);
    }

    public async list<T>(): Promise<T[]> {
        return this.client.fetch(this.name);
    }

    protected getName(): string {
        return this.name;
    }
}