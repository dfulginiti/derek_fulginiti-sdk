import chai from 'chai';
import chaiFetchMock from 'chai-fetch-mock';
import fetchMock from 'fetch-mock';
import Client from '../../src/client/client';

chai.use(chaiFetchMock);

let client: Client;

const expect = chai.expect;

const booksResponse = [
    {
        "_id": "5cf5805fb53e011a64671582",
        "name": "The Fellowship Of The Ring"
    },
];

describe('Client', () => {
    before(() => client = new Client('key'));

    it('returns json response on success', async () => {
        fetchMock.get('/book', { 
            'docs': booksResponse,
         });

        const books = await client.fetch('book');

        expect(fetchMock).route('/book').to.have.been.called;

        expect(books).to.be.an('object');
        expect(books).to.have.key('docs');
        expect(books.docs).to.be.eql(booksResponse);
    });

    it('throws error on failure', async () => {
        fetchMock.get('/book', { 
            'docs': booksResponse,
            'config': { 'throws': new TypeError('Failed to fetch') }
         });

         try {
             await client.fetch('book');
         } catch (err) {
            expect(err).to.eql(new TypeError('Failed to fetch'));
         }
    });

    after(() => fetchMock.restore());
});