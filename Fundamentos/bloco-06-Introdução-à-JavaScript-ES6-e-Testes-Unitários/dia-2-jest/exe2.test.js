const myFizzBuzz = require('./exe2');

it('deve retornar uma funçao como parametro', () => {
    expect(myFizzBuzz(30)).toBe('fizzbuzz');
    expect(myFizzBuzz(6)).toBe('fizz');
    expect(myFizzBuzz(10)).toBe('buzz');
    expect(myFizzBuzz(1)).toBe(1);
    expect(myFizzBuzz('2')).toBe(false);
  });
