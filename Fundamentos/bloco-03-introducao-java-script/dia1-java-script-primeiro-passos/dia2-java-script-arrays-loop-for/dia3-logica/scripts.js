// fatorial

let fatorial = 1;
let inverter = 'Amizade';



for(let index = 10; index > 0; index -= 1 ) {
  fatorial *= index


}
console.log(inverter.split('').reverse().join(''));
//--------------------------------------------------------------------------------------------------------------------------

// maior e menor palavra

let array = ['java', 'javascript', 'python', 'html', 'css'];
let biggier = array[0];
let small = array[0];


for( let index1 = 0; index1 < array.length; index1 +=1) {
  if (array[index1].length > biggier.length) {
    biggier = array[index1];

  }

}
for (let index = 0; index < array.length; index += 1) {
  if (array[index].length < small.length) {
    small = array[index];
  }
}
console.log(biggier);
console.log(small)
//-----------------------------------------------------------------------------------------------------------------------------
   

// divisores


let biggestPrimeNumber = 0;

for (let currentNumber = 2; currentNumber <= 50; currentNumber += 1) {
  let isPrime = true;
  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    if (currentNumber % currentDivisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    biggestPrimeNumber = currentNumber;
  }
}

console.log(biggestPrimeNumber);