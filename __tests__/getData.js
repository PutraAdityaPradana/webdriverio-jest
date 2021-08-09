import * as endpoints from '../__tests__/endpoint/getDataEndpoints';
import * as schema from '../schema/getDataSchema';
import 'regenerator-runtime/runtime';
import { matchers } from 'jest-json-schema';
expect.extend(matchers);

let response;
describe('Cheking value data', () => {
    test('Checking value data response number one', async () => {
        response = await endpoints.apiGetData();
        expect(response.body).toMatchSchema(schema.getDataSchema);
        expect(response.status).toEqual(200);   
        expect(response.body[0].id).toEqual('4e09b023-f650-4747-9ab9-eacf14540cfb');
        expect(response.body[0].name).toEqual('Air Destroyer Goliath');
        expect(response.body[0].description).toEqual('A military airship utilized by the government to access Laputa');
        expect(response.body[0].vehicle_class).toEqual('Airship');
        expect(response.body[0].length).toEqual('1,000');
        expect(response.body[0].pilot).toEqual('https://ghibliapi.herokuapp.com/people/40c005ce-3725-4f15-8409-3e1b1b14b583');
        expect(response.body[0].films).toEqual(['https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe']); //there is array ini this value
        expect(response.body[0].url).toEqual('https://ghibliapi.herokuapp.com/vehicles/4e09b023-f650-4747-9ab9-eacf14540cfb');
    });

    test('Checking value data response number two', async () =>{
        response = await endpoints.apiGetData();
        expect(response.body).toMatchSchema(schema.getDataSchema);
        expect(response.status).toEqual(200);
        expect(response.body[1].id).toEqual('d8f893b5-1dd9-41a1-9918-0099c1aa2de8');
        expect(response.body[1].name).toEqual('Red Wing');
        expect(response.body[1].description).toEqual('An experimental aircraft captured by Porco. Named Savoia S.21');
        expect(response.body[1].vehicle_class).toEqual('Airplane');
        expect(response.body[1].length).toEqual('20');
        expect(response.body[1].pilot).toEqual('https://ghibliapi.herokuapp.com/people/6523068d-f5a9-4150-bf5b-76abe6fb42c3');
        expect(response.body[1].films).toEqual(['https://ghibliapi.herokuapp.com/films/ebbb6b7c-945c-41ee-a792-de0e43191bd8']);
        expect(response.body[1].url).toEqual('https://ghibliapi.herokuapp.com/vehicles/d8f893b5-1dd9-41a1-9918-0099c1aa2de8');
    });

    test('Using Snapshoot for checking all value responses', async () => {
        response = await endpoints.apiGetData();
        expect(response.status).toEqual(200);   
        expect(response.body).toMatchSchema(schema.getDataSchema);
        expect(response.body).toMatchSnapshot();
    }); 
});