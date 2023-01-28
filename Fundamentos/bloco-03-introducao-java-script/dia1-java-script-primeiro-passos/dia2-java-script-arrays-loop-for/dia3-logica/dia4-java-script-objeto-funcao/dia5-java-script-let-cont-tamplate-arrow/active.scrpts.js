function imprimeIdade() {
  for (let idade = 30; idade <= 40; idade += 1) {
    console.log("Idade dentro do for:", idade);
  }
}
imprimeIdade();
//------------------------------------------------------------------------------------------

// Executando esse código iremos receber um erro `TypeError: Assignment to constant variable.`
let pessoa = {
  nome: "Vinicius",
  idade: 30,
};

(pessoa.nome = "Gabriel"),
  (pessoa.idade = 22),
  console.log("Nome:", pessoa.nome);
console.log("Idade:", pessoa.idade);
//----------------------------------------------------------------------------------------

let favoriteFood = "Lasanha";
favoriteFood = "Hamburguer";
console.log(favoriteFood);
//------------------------------------------------------------------------------------

const name = "Adriana";
const lastName = "Soares";
console.log(`ola ${name}  ${lastName} !`);
function soma(a, b) {
  let resultado = a + b;
  return resultado;
}
let a = 3;
let b = 5;
console.log(`o resultado de: ${a} + ${b} e:  ${soma(a, b)}`);
//--------------------------------------------------------------------------------------------------------------

const numeroAleatorio = () => {
  return Math.random();
};
console.log(numeroAleatorio());
//---------------------------------------------------------------------------------------------------------------

const hello = (nomes) => `Olá, ${nomes}!`;
let nomes = "Gabriel";
console.log(hello(nomes));
//--------------------------------------------------------------------------------------------------------------

const nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`;
let nome = "Ivan";
let sobrenome = "Pires";
console.log(nomeCompleto(nome, sobrenome));
//---------------------------------------------------------------------------------------------------------------

let speed = 90;

const speedCar = (speed) =>
  speed >= 120
    ? `voce ultrapassou o limite de velocidade`
    : `voce está na velocidade permitida`;

console.log(speedCar(speed));
