// exercicio 1.
const  tagH1 = document.createElement('h1');
tagH1.innerText = 'TrybeTrip - Agência de Viagens';
document.body.appendChild(tagH1);

// exercicio 2.

const tagMain = document.createElement('main');
tagMain.className = 'main-content';
document.body.appendChild(tagMain)

// exerciccio 3.
const tagSection = document.createElement('section');
tagSection.className = 'center-content';
tagMain.appendChild(tagSection);

// exercicio 4.
const tagP = document.createElement('p');
tagP.innerText = 'Eu amo Trybe';
tagSection.appendChild(tagP);

// exercicio 5.
const section2 = document.createElement('section');
section2.className = 'left-content';
tagMain.appendChild(section2);

// exercicio 6.
const section3 = document.createElement('section');
section3.className = 'right-content';
tagMain.appendChild(section3);

// exercicio 7.
const photo = document.createElement('img');
photo.className = 'small-image';
photo.src = "https://picsum.photos/200";
section2.appendChild(photo);

// exerccio 8.
const list = document.createElement("ul") ;
section3.appendChild(list);

const array = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis',
'Sete', 'Oito', 'Nove', 'Dez.']


for (let num in array) {
  const creaLi = document.createElement('li');
  creaLi.innerHTML = array[num];
  // aqui retornou o array numeros da lista.
  list.appendChild(creaLi);
}

// exercicio 9
for(let index = 1; index <= 3; index += 1) {
    const tagH3 = document.createElement('h3');
    tagH3.innerText = 'mostra' + index;
    tagMain.appendChild(tagH3);

//const tagH31 = document.createElement('h3');
//const tagH32 = document.createElement('h3');
//const tagH33 = document.createElement('h3');
//tagMain.appendChild(tagH31);
//tagMain.appendChild(tagH32);
//tagMain.appendChild(tagH33);


// exercicio 10

// Selecionando a tag h1
const addTitle = document.querySelector("h1");
// adicionando na classe.
addTitle.classList.add("title");
//className

// exercicio 11
const h3Elements = document.getElementsByTagName("h3");

for (let i = 0; i < h3Elements.length; i++) {
  h3Elements[i].classList.add("description");

}
// exerccio 12
const sectionLeftContent = document.getElementsByClassName('left-content')[0];
 elementMain.removeChild(sectionLeftContent);

// exerccio 13
const sectionRightContent = document.getElementsByClassName('right-content')[0];
      sectionRightContent.style.marginRight='auto';

 // exercicio 14
 
 const sectionCenterContent = document.getElementsByClassName('center-content')[0];
 sectionCenterContent.parentNode.style.backgroundColor = 'green';

// exercicio 15
const ul = document.getElementsByTagName('ul')[0];
ul.lastChild.remove();
ul.lastChild.remove();



};







