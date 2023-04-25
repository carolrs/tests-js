const fizz = require("./fizzBuzz");

describe ('fizzBuzz', ()=>{
  it('returns fizz when a number % 3 is equal to 0', () =>{
    expect(fizz(3)).toBe('Fizz')
  })

  it('returns buzz when a number % 5 is equal to 0', () =>{
    expect(fizz(5)).toBe('Buzz')
  })

  it('returns fizzbuzz when a number % 3 and 5 is equal to 0', () =>{
    expect(fizz(15)).toBe('FizzBuzz!')
  })

  it('returns the number given when does not have any match', () =>{
    expect(fizz(14)).toBe(14)
  })
})