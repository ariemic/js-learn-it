const ulList = document.createElement('ul');
const listItem = document.createElement('li');
listItem.textContent = 'hello';

// document.body.appendChild(ulList);
// ulList.appendChild(listItem);

const div = document.getElementsByTagName('div')[0];
const p = document.createElement('p');
p.textContent = "I'm a paragraph";
const h2 = document.createElement('h2');
h2.textContent = "I'm a heading 2";

div.append(p, h2, 'siema');

// Roznica pomiedzy innerHTML i textContent
// kiedy uzytkownik ma dostep do pola tekstowego wysyla nam jakies dane to nie mozemy ustawiac tego
// innerHTML bo naraza nas to na ataki, user ma mozliwosc ingerowania w wyglad strony internetowej i nie tylko

div.removeChild(p);

// remove usuwa wszystko co jest w divie
div.remove();

const h1 = document.querySelector('h1');
h1.innerHTML = 'Trening';

// zad1
const ul = document.createElement('ul');
document.body.appendChild(ul);
for (let i = 1; i <= 10; i++) {
  const li = document.createElement('li');
  li.textContent = i;
  ul.appendChild(li);
}

// const lastLi = ul.getElementsByTagName('li')[9];
const lastLi = ul.querySelector('li:last-child');
console.log(lastLi.textContent);

lastLi.textContent = "I'm the last element";
lastLi.style.color = 'blue';
lastLi.style.padding = '20px 40px';
lastLi.style.fontSize = '48px';
