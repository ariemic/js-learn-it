let numbers = [];
for (let i = 0; i <= 10; i++) {
  numbers.push(i);
}

const muliply = x => 2 * x;

const newNumbers = numbers.map(muliply);
console.log(newNumbers);

numbers = [0, 0, 1, 1, 2, 2, 2];
const colors = ['red', 'green', 'blue', true, 123];
const cars = [123, true, 'audi', 'bmw', 'mercedes', 'ferrari', '🤷‍♂️', '👀'];

const numbers2 = numbers.slice(0, 2);
const numbers3 = numbers.slice(-3);
console.log(numbers2, numbers3);
const randomStuff = colors.splice(-2, 2);
console.log(randomStuff);

const newCars = cars.splice(2, 4, 'test');
console.log(newCars);
console.log(cars);

// SHORTCUT nfn
const first = second => {
  third;
  //   clg
  console.log(first);
};

numbers.forEach(num => console.log(num * num));

const names = ['Lisa', 'Laura', 'Max', 'Krzys'];
const bigNames = names.map(name => name.toUpperCase());
console.log(bigNames);

const showBigNames = name => {
  console.log(name.toUpperCase());
};

// CAllBACK
names.forEach(showBigNames);
// WITHOUT CALLBACK
names.forEach(el => console.log(el.toUpperCase()));
