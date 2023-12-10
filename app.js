const fs = require('fs');

const genders = ["male", "female"];
const maleNames = ["John", "Michael", "David", "James", "Robert"];
const femaleNames = ["Mary", "Jennifer", "Linda", "Patricia", "Elizabeth"];
const maleLastNames = ["Smith", "Johnson", "Brown", "Davis", "Wilson"];
const femaleLastNames = ["Johnson", "Brown", "Davis", "Wilson", "Anderson"];

function randChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateEmail(firstName, lastName) {
    return `${firstName.toLowerCase()}.${lastName.toLowerCase()}@gmail.com`;
}

const people = [];

for (let i = 0; i < 20; i++) {
    const gender = randChoice(genders);
    const firstName = gender === "male" ? randChoice(maleNames) : randChoice(femaleNames);
    const lastName = gender === "male" ? randChoice(maleLastNames) : randChoice(femaleLastNames);

    const person = {
        gender: gender,
        firstName: firstName,
        lastName: lastName,
        age: Math.floor(Math.random() * 53 + 18),
        email: generateEmail(firstName, lastName),
        //phoneNumber: generatePhoneNumber(),
    };

    people.push(person);
}

const jsonData = JSON.stringify(people, null, 2);

fs.writeFile('people.json', jsonData, (err) => {
    if (err) throw err;
    console.log('Data has been saved to the file people.json');
});
