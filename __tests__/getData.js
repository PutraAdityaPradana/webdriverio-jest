import * as endpoints from '../__tests__/endpoint/getDataEndpoints';
import 'regenerator-runtime/runtime';
import { matchers } from 'jest-json-schema';
import { test } from '@jest/globals';
expect.extend(matchers);

let response;
describe('Checking value data', () => {
    test('Checking value data response number one', async () => {
        response = await endpoints.apiGetData();
        expect(response.status).toEqual(200);
    });
});