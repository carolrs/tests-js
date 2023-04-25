const mult = require('./multiply')

describe ('multiply', () => {
  it ('multiply 2 * 3', () => {
    expect(mult(2,3)).toBe(6)
  })

  it ('multiply 1 * 3', () => {
    expect(mult(1,3)).toBe(3)
  })
})