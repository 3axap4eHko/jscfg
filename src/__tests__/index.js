import config, { set, assert } from '../index';

describe('JS Config test suite', () => {
  it('Should be empty without initialization', () => {
    expect(config).toMatchObject({});
  });

  it('Should contain provided properties', () => {
    const fixture = { a: 1, b: 'test', c: true, d: [1, 2, 3, 4, 5], e: { f: 1 } };
    set(fixture);
    expect(config).toMatchObject(fixture);
  });

  it('Should support swallow mode', () => {
    const fixture = { d: [], e: {} };
    set(fixture, true);
    expect(config).toMatchObject(fixture);
  });

  it('Should assert right schema without exceptions', () => {
    const schema = { a: Number, b: String, c: Boolean, d: Array, e: Object };
    expect(() => assert(schema)).not.toThrow();
  });

  it('Should assert wrong schema with exception', () => {
    const schema = { a: Function, b: String, c: Boolean, d: Array, e: Object };
    expect(() => assert(schema)).toThrow();
  });
});
