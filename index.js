"use strict";
var person1 = {
    name: "Andre",
    age: 16
};
var getPersonDetails = function (person) {
    return person.age !== undefined
        ? "".concat(person.name, ": ").concat(person.age, " years")
        : person.name;
};
console.log(getPersonDetails(person1));
