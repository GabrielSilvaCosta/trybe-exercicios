function myFizzBuzz(num) { // recebe numero como parametro
    if (typeof num !== 'number') return false;
    if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
    if (num % 3 === 0) return 'fizz';
    if (num % 5 === 0) return 'buzz';
    return num;
  }
  
  // implemente seus testes aqui
  module.exports = myFizzBuzz;

  //A função myFizzBuzz(num) recebe um número num como parâmetro.
  // Caso num seja um número divisível por 3 e 5, a função retorna "fizzbuzz".
  // Caso num seja um número divisível apenas por 3, retorna "fizz".
  // E caso num seja um número divisível apenas por 5, retorna "buzz".
  // Se num for um número que não é divisível nem por 3 e nem por 5, a função retorna o próprio número num
  //. Caso num não seja um número, a função retorna false.

 // Execute a função myFizzBuzz(num), sendo num um número divisível por 3 e 5, e verifique se o retorno é o esperado.
 
  //30 e  numero divisivel 3 e 5. ok
  // 6 e divisel por 3. ok
  // 10 3 divisivel por 5
  // 2 não e divisivel por 3 e nem 5
