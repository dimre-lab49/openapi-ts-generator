import { EndPointsGenerator } from './endpoints-generator';

describe('EndPointsGenerator', () => {
  it('should generate files', () => {
    const gen = new EndPointsGenerator({
      outputPath: './'
    });
    const response = gen.eliminateDupes({
      paths: [
        { tag: 'lookup', endpoint: 'api/v1/Lookup.{format}' },
        { tag: 'lookup', endpoint: 'api/v1/Lookup.{format}' },
        { tag: 'lookup', endpoint: 'api/v1/Lookup.{format}/GetLookup1' },
        { tag: 'lookup', endpoint: 'api/v1/Lookup.{format}/GetLookup2' },
      ]
    });
    expect(response).toMatchSnapshot();
  });
});
