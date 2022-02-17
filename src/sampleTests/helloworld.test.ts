import helloWorld from './helloworld';

describe('/sampleTests/helloworld', () => {
  it('should pass', async () => {
    await new Promise(f => setTimeout(f, 60000));
    expect(helloWorld()).toBe("hello world");
  })
});