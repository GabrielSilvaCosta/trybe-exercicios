function myFizzBuzz(num) { // recebe numero como parametro
    if (typeof num !== 'number') return false;
    if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
    if (num % 3 === 0) return 'fizz';
    if (num % 5 === 0) return 'buzz';
    return num;
  }
  
  // implemente seus testes aqui
  module.exports = myFizzBuzz;

  //30 e  numero divisivel 3 e 5. ok
  // 6 e divisel por 3. ok
  // 10 3 divisivel por 5
  // 2 não e divisivel por 3 e nem 5
