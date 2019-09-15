const Boilerplate = require('./index');

describe(Boilerplate, () => {
  let boilerplate = null;

  beforeAll(() => {
    boilerplate = new Boilerplate();
  });

  it('should have right project variable', () => {
    expect(boilerplate.project).toBe('frangelli-node-jest-boilerplate');
  });
});
