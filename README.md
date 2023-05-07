# derek_fulginiti_sdk
SDK for The One API (Lord of the Rings informational API)

## Installation
```bash
npm install @dfulginiti/lotr-sdk
```

## Obtaining an API Key
[Create an account](https://the-one-api.dev/sign-up) in order to obtain an API key.

## Basic Usage

### Initialization

You can initialize the Lotr class with the following syntax:

```ts
import Lotr from '@dfulginiti/lotr-sdk';

const lotr = new Lotr('API_KEY');
```

### Resources

The SDK currently supports the Movie and Quote resources.
With it, you can retrieve either one or all of a specific resource.
You can also retrieve a list of quotes for a specific movie.

### Example Usage

Fetching all movies

```ts
lotr.movies();
```

Fetching one movie

```ts
lotr.movie('5cd95395de30eff6ebccde5b'); // The Two Towers
```

Fetching movie quotes

```ts
lotr.movieQuotes('5cd95395de30eff6ebccde5b');
```

## Rate Limit

You may only hit the API up to 100 times in a 10 minute span, so use wisely!

## Pagination, Filtering, and Sorting

The SDK does not currently support pagination, filtering, or sorting. Perhaps in the future!

## API Documentation

For more information on the underlying API, please see: <https://the-one-api.dev/documentation>