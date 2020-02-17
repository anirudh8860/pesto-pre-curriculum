function add(a, b) {
  return a+b;
}

function subtract(a, b) {
  return a-b;
}

function multiply(a, b) {
  return a*b;
}

function divide(a, b) {
  return a/b;
}

const describe = (desc, fn) => {
  console.log(desc)
  fn()
}

const it = (msg, fn) => describe('  ' + msg, fn)

const matchers = (exp) => ({
  toBe: (assertion) => {
    if (exp === assertion) {
      console.log('pass')
      return true
    } else {
      console.log('fail')
      return false
    }
  }
})

const expect = (exp) => matchers(exp)

describe('add', () => {
  it('adds two numbers', () => {
    const result = add(4, 2)
    expect(result).toBe(6)
  })
})

describe('subtract', () => {
  it('subtracts two numbers', () => {
    const result = subtract(4, 2)
    expect(result).toBe(2)
  })
})

describe('multiply', () => {
  it('multiplies two numbers', () => {
    const result = multiply(4, 2)
    expect(result).toBe(8)
  })
})

describe('divide', () => {
  it('divides two numbers', () => {
    const result = divide(4, 2)
    expect(result).toBe(2)
  })
})

module.exports = {
  describe,
  expect,
  it,
  matchers
}
