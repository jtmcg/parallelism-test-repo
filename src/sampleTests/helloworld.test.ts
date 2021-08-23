import helloWorld from './helloworld';

describe('/sampleTests/helloworld', () => {
  it('should pass', () => {
    expect(helloWorld()).toBe("hello world");
  })
});