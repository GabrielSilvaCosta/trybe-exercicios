const myRemove = require('./remove');




it('deve retornar um array removendo o item correto', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]); // ser extamente 1, 2, 4
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]); // não pode ser 'not' 1,2,3,4
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);  // tem que ser igual 1, 2, 3 ,4
  });
