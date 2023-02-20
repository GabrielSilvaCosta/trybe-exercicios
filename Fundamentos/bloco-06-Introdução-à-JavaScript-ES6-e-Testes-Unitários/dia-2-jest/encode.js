const mapString = (objectMap, string) => { // dois argumentos, objectMap associa caracteres as seres mapeados
    const splitString = string.split('');
    const mappedArray = [];
    for (let index = 0; index < splitString.length; index += 1) {
      const character = splitString[index];
      const mappedValue = objectMap[character];
      
      if (mappedValue) {
        mappedArray.push(mappedValue);
      } else {
        mappedArray.push(character);
      }
    }
    return mappedArray.join('');
  }
  const encode = (string) => {
    const map = {
      a: 1,
      e: 2,
      i: 3,
      o: 4,
      u: 5,
    };
    return mapString(map, string);
  }
  const decode = (string) => {
    const map = {
      1: 'a',
      2: 'e',
      3: 'i',
      4: 'o',
      5: 'u',
    };
    return mapString(map, string);
  }

 // quando eu estiver 3 função, faz isso
 const functions = { encode, decode };
 module.exports = functions;

//   A função "mapString" recebe dois argumentos: "objectMap" e "string".
//    O "objectMap" é um objeto que associa caracteres a serem mapeados com seus valores correspondentes.
//     A "string" é uma string a ser mapeada. A função realiza a divisão da string em caracteres individuais,
//      itera sobre cada um dos personagens e mapeia aqueles presentes em "objectMap" com seus valores correspondentes.
//       A função retorna uma string com os personagens mapeados.

// A função "encode" utiliza a função "mapString" para codificar uma string de entrada.
//  Ela cria um objeto "map" que associa os vogais "a", "e", "i", "o" e "u" com os números 1, 2, 3, 4 e 5, respectivamente.
//   Em seguida, ela chama a função "mapString" para mapear uma string de entrada utilizando o objeto "map".

// A função "decode" realiza a decodificação de uma string de entrada. 
// Ela cria um objeto "map" que associa os números 1, 2, 3, 4 e 5 com os vogais "a", "e", "i", "o" e "u", respectivamente.
//  Em seguida, ela chama a função "mapString" para mapear uma string de entrada utilizando o objeto "map" 
//  e retornar uma string decodificada.