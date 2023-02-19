function myRemove(arr, item) { // argumentos
    let newArr = []; // array vazio
    for (let index = 0; index < arr.length; index += 1) { // aqui pecorre o array arr.
      if (item !== arr[index]) {
        //verifica se cada elemento do array é diferente do item fornecido como argumento. 
        //Se o elemento não for igual ao item, ele é adicionado ao novo array newArr
        newArr.push(arr[index]);
      }
    }
    return newArr;
//     No final, a função retorna o novo array newArrcontendo todos os elementos
//      do array original arrque não são iguais ao item fornecido.
   }
   module.exports = myRemove;
  
//   A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item, caso ele exista no array:
// Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado; concluido

// Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4];

// Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado.
  
  // implemente seus testes aqui

