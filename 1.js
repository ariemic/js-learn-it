const name = "Jonas";
const job = "teacher";
const jonasNew = `I'm ${name} and I work as a ${job}`;
console.log(jonasNew);
console.log(`
    String
    multiple
    lines`);

// const favourte = prompt("What's your favourte number?");

const day = "monday";

switch (day) {
  case "monday":
    console.log("Plan course structure");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
}

const calcAge = (birthYear) => 2037 - birthYear;
const age = calcAge(2001);
console.log(age);

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Micheal", "Peter", "Steven"],

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
};

console.log(jonas.age);

console.log(
  `${jonas.firstName} has ${jonas.friends.length}, and his best friend is called ${jonas.friends[0]}`
);

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weight repetition ${rep}`);
}
