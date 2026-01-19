type Person = {
  name: string; // required
  age?: number; // optional
};

const person1: Person = {
  name: "André",
  age: 39,
};

const getPersonDetails = (person: Person): string => {
  return person.age === undefined
    ? person.name
    : `${person.name}: ${person.age} years`;
};

console.log(getPersonDetails(person1));
