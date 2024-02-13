const fs = require("fs");
console.log(fs);

const genders = ["M", "F"];

const maleNames = [
  "Przemek",
  "Piotrek",
  "Paweł",
  "Miłosz",
  "Adam",
  "Gniewosz",
  "Kuba",
  "Oktawian",
  "Tomek",
  "Sebastian",
  "Patryk",
  "Mikołaj",
  "Zbigniew",
  "Jan",
  "Robert",
  "Łukasz",
  "Andrzej",
  "Kamil",
  "Mateusz",
  "Grzegorz",
];

const femaleNames = [
  "Wiktoria",
  "Alicja",
  "Kasia",
  "Ola",
  "Ania",
  "Ela",
  "Maria",
  "Ewa",
  "Oliwia",
  "Weronika",
  "Patrycja",
  "Milena",
  "Martyna",
  "Janina",
  "Amelka",
  "Kamila",
  "Anastazja",
  "Bernadyna",
  "Ewelina",
  "Róża",
];

const lastName = [
  "Bulanda",
  "Andruchowicz",
  "Gładysz",
  "Masek",
  "Wadyl",
  "Felsztyński",
  "Nowak",
  "Popa",
  "Brzęczyszczykiewicz",
  "Konstantynopolitańczykowianowicz",
];

const randChoice = (arr) => {
  const x = Math.floor(Math.random() * arr.length);
  return arr[x];
};

const people = [];

for (let i = 0; i <= 20; i++) {
  const person = {};
  person.gender = randChoice(genders);
  if (person.gender === "M") {
    person.firstName = randChoice(maleNames);
  } else {
    person.firtName = randChoice(femaleNames);
  }

  person.lastName = randChoice(lastName);
  person.age = Math.floor(Math.random() * 70 + 16);

  people.push(person);
}

const json = JSON.stringify(people);

fs.writeFile("people.json", json, (err) => {
  if (err) throw err;
  console.log("The file has been saved");
});
