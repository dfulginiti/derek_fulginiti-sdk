export class Client {
    private readonly baseUrl = 'https://the-one-api.dev/v2';

    // the /book endpoint does not require an api key.
    // Please @see {@link https://the-one-api.dev/documentation} for more details.
    constructor(private apiKey?: string) {}

    public async fetch<T>(uri: string): Promise<T> {
        try {
            const response = await fetch(this.formatUrl(uri), this.auth());

            return await response.json();
        } catch (error) {
            throw(error);
        }
    }

    private formatUrl(uri: string): string {
        return `${this.baseUrl}/${uri}`;
    }

    private auth(): RequestInit {
        return {
            headers: { Authorization: `Bearer ${this.apiKey}` },
        };
    }
}