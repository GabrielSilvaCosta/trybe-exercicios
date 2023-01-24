let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media = 0;
let decidi = 0;


// para pecorrer o array .
for(let index = 0; index < numbers.length; index+=1) {
    // soma dos numeros dentro do array
    soma = soma + numbers[index];

}
// media dos numeros do arrays
media = soma / numbers.length;

// para saber o maior valor
if(media > 20) {
    console.log('valor maior que 20');
} else {
    console.log('valor menor que 20');
}


// saber maior valor do arrays.
decidi = numbers[0]


for(let maior = 0; maior < numbers.length; maior+=1) {
    if (numbers[maior] > decidi) {

        decidi = numbers[maior];
    }

}
//------------------------------------------------------------------------------------------------

// saber se tem valor impar

for(let imparIndex = 0; imparIndex < numbers.length; imparIndex+= 1) {
    if(numbers[imparIndex] % 2 !== 0) {
        media+= 1;
    }
}

if (media === 0 ) {
    console.log('nenhum valor impar encontrado')
} else {
    console.log(media);
}
//-------------------------------------------------------------------------------------------------------------

// saber menor valor do arrays.


let smallNumber = numbers[0];

for(smalIndex = 0; smallNumber < numbers.length; smallNumber+= 1) {
    if (numbers[smalIndex] < smallNumber){

        smallNumber = numbers[smalIndex];
    }
   
}
//--------------------------------------------------------------------------------------------------------------------------------
// imprima de 1 a 25

let numeros = [];

for (let index = 1; index <= 25; index += 1) {
  numbers.push(index);
}
//--------------------------------------------------------------------------------------------

// divisao dos elemntos

for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index] / 2);
  };

console.log(numbers);




console.log(soma);
console.log(media);
console.log(decidi);
console.log(smallNumber);

