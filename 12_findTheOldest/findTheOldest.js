const findTheOldest = function (array) {
    let personaMasVieja = {};
    personaMasVieja["age"] = 0;

    for (let persona of array) {

        let age = 0;
        if (!persona.yearOfDeath) {

            persona.yearOfDeath = new Date().getFullYear();
        }
        age = persona.yearOfDeath - persona.yearOfBirth;

        persona["age"] = age;
        if (age > personaMasVieja.age) {
            personaMasVieja = persona;
        }
    }
    return personaMasVieja;

};

// Do not edit below this line
module.exports = findTheOldest;
