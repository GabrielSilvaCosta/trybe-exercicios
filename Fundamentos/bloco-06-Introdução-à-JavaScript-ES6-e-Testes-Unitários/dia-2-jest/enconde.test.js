// encodeDecode.test.js
const { encode, decode } = require('./encode');
describe('Testa as funções encode e decode', () => {
  it('a função encode é definida', () => {
    expect(encode).toBeDefined(); // retorna 'true', caso a função exista.
  });
  it('encode é uma função', () => {
    expect(typeof encode).toEqual('function'); // enconde tem que ser função
  });
  it('converte apenas a vogal "a" no número 1', () => {
    expect(encode('ana')).toEqual('1n1'); // trocamos tudo a com numero 1.
  });
  it('converte a vogal "e" no número 2', () => {
    expect(encode('ele')).toEqual('2l2'); // trocamos tudo com numero 2
  });
  it('converte a vogal "i" no número 3', () => { // trocamos tudo com numero 3
  });
    expect(encode('xixi')).toEqual('x3x3');
  });
  it('converte a vogal "o" no número 4', () => { // trocamos tudo com 4
    expect(encode('ovo')).toEqual('4v4');
  });
  it('converte a vogal "u" no número 5', () => { // trocamos tudo co 5
    expect(encode('nu')).toEqual('n5');
  });
  it('checa se o retorno da função tem o mesmo número de caracteres', () => {
    expect(encode('trybe').length).toEqual(5);; // o length tem que ser igual 5 caractere
  });
  it('a função decode é definida', () => {
    expect(decode).toBeDefined(); // retorna true caso a função exista
  });
  it('decode é uma função', () => {
    expect(typeof decode).toEqual('function'); //decode tem que ser uma função
   });
  it('converte apenas o número 1 na vogal a', () => { // converte 1 pelo a
    expect(decode('1n1')).toEqual('ana');
  });
  it('converte apenas o número 2 na vogal e', () => { // converte 2 pelo e
    expect(decode('2l2')).toEqual('ele');
  });
  it('converte apenas o número 3 na vogal i', () => { // converte 3 pelo i
    expect(decode('x3x3')).toEqual('xixi');
  });
  it('converte apenas o número 4 na vogal o', () => { // converte 4 pelo o
    expect(decode('4v4')).toEqual('ovo');
  });
  it('converte apenas o número 5 na vogal u', () => { // converte 5 pelo u
    expect(decode('n5')).toEqual('nu');
  });
  it('checa se o retorno da função tem o mesmo número de caracteres', () => {
    expect(decode('trybe').length).toEqual(5); // retornar o numero de caractere igual a 5
  });


