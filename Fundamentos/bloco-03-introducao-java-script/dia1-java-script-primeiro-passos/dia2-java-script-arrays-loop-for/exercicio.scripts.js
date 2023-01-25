
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];

// ordem crescente

for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] < numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
      }
    }
  }

  // ordem decresente

  for(let decreIndex = 1; decreIndex < numbers.length; decreIndex +=1) {
    for(let thirdIndex = 0; thirdIndex < decreIndex; thirdIndex += 1) {
        if (numbers[decreIndex] > numbers[thirdIndex]) {
            let posicao = numbers[decreIndex];
            numbers[decreIndex] = numbers[thirdIndex];
            numbers[thirdIndex] = posicao;

        }

    }


  }

  for(let indice = 0; indice < numbers.length; indice +=1 ) {
    if (indice + 1 < numbers.length) {
        newArray.push(numbers[indice] * numbers[indice + 1])

    } else {

        newArray.push(numbers[indice] * 2);



    }

  }



 
  
  console.log(newArray);