"use strict";
// these info are true for strict mode but not for sloppy mode

console.log(this);

// classic function has own keyword
const calcAge = function (birthYear) {
  console.log(2024 - birthYear);
  console.log(this);
};

// arrow function has not own keyword; is using global this here it's window
const calcAgeArrow = (birthYear) => {
  console.log(2024 - birthYear);
  console.log(this);
};

calcAge(2001);
calcAgeArrow(2001);
