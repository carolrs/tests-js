const add = require('./add')

describe('add', () => {
  it('adds 2 and 2', () => {
    expect(add(2,2)).toBe(4);
  });

  it('adds 3 and 3', () => {
    expect(add(3,3)).toBe(6);
  });

  it('adds 0 and 0', () => {
    expect(add(0,0)).toBe(0)
  });
});