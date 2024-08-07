const checkAge = age => {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      resolve();
    } else {
      reject('You are too young');
    }
  });
};

const doubleCheck = () => {
  return new Promise(resolve => {
    console.log('Check once again');
    setTimeout(() => {
      resolve('Everything alright, age fits');
    }, 1000);
  });
};

// Write with promises
// checkAge(50)
//   .then(() => {
//     console.log('You can enter ...');
//     return doubleCheck();
//   })
//   .then(res => console.log(res))
//   .then(() => console.log('Verification finished'))
//   .catch(error => console.error(error));

async function test() {
  try {
    await checkAge(2);
    console.log('You can enter');
    await doubleCheck();
    console.log('Everything is okay');
    console.log('Verification finished');
  } catch (error) {
    console.error(error);
  }
}

test();

// API EXAMPLES WITH DOGGIES
const URL = 'https://dog.ceo/api/breeds/image/random';

fetch(URL)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));

async function testDog() {
  const img = document.querySelector('img');
  try {
    const res = await fetch(URL);
    const data = await res.json();
    img.src = data.message;
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

const btnFetch = document.querySelector('.btn--fetch');
btnFetch.addEventListener('click', testDog);

const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');

// 1 FETCH
fetch(URL)
  .then(res => res.json())
  .then(res => one.setAttribute('src', res.message));

//2 AXIOS
axios.get(URL).then(res => two.setAttribute('src', res.data.message));

//3 ASYNC + AXIOS
async function showImage() {
  const res = await axios.get(URL);
  three.setAttribute('src', res.data.message);
}

showImage();

// Mouseover event triggers new photo fetch
const gridImgs = document.querySelectorAll('.container img');

function fetchNewImg(e) {
  const imgEl = e.target;
  axios
    .get(URL)
    .then(res => imgEl.setAttribute('src', res.data.message))
    .catch(error => console.error('Error fetching new image: ', error));
}

gridImgs.forEach(img => {
  img.addEventListener('mouseover', fetchNewImg);
});
