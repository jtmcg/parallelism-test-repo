import foobar from './foobar';

describe('/sampleTests/foobar', () => {
  const someArg = 'someArg';
  it('should pass', () => {
    expect(foobar(someArg)).toBe(`foo ${someArg} bar`);
  })
});