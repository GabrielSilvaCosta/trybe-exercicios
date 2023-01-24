const a = 8;
const b = 5;
const c = 2;

let adicao = a + b;
let sub = a - b;
let mult = a * b;
let div = a / b;
let mod = a % b;

console.log('qual o valor da soma', adicao);
console.log('qual o valor da sub', sub);
console.log('qual o valor da multiplicação', mult);
console.log('qual o valor da divisão', div);
console.log('qual o valor do modulo', mod);

if(a > b && a > c) {
    console.log('o maior numero e o', a);
} else if (b > a && b > c){
    console.log('o maior nmero e o', b);
} else {
    console.log('o maior numero e o', c);
}
// ------------------------------------------------------------------------------------------------------------------

const number = 4;

if (number > 0) {
    console.log('positive');
} else if(number < 0) {
    console.log('negative');

} else {
    console.log('valor zero')
}

//-----------------------------------------------------------------------------------------------------------------------
const degreeAngleA = 65;
const degreeAngleB = 100;
const degreeAngleC = 15;

let sumOfAngles = degreeAngleA + degreeAngleB + degreeAngleC;

let allAnglesArePositives = degreeAngleA > 0 && degreeAngleB > 0 && degreeAngleC > 0;

if(allAnglesArePositives){
  if (sumOfAngles === 180) {
    console.log(true);
  } else {
    console.log(false);
  };
} else {
  console.log('Erro: ângulo inválido');
}
//-------------------------------------------------------------------------------------------------------------------------
const chessPiece = 'bispo';

switch (chessPiece.toLowerCase()) {
  case 'rei':
    console.log('Rei-> Uma casa apenas para qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo-> Diagonal.');
    break;
  case 'rainha':
    console.log('Rainha-> Diagonal, horizontal e vertical.');
    break;
  case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case 'torre':
    console.log('Torre -> Horizontal e vertical.');
    break;
  case 'peão':
    console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log('Erro, peça inválida!');
    break;
};
//------------------------------------------------------------------------------------------------------------------------------
const grade = 76;

if (grade < 0 || grade > 100) {
  console.log("Erro, nota incorreta!");
} else if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else if (grade >= 60) {
  console.log("D");
} else if (grade >= 50) {
  console.log("E");
} else {
  console.log("F");
}
//------------------------------------------------------------------------------------------------------------------------
