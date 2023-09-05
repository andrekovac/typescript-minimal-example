type Person = {
  name: string;
  age?: number;
};

const person1: Person = {
  name: "André",
  age: 36,
};

const getPersonDetails = (person: Person): string => {
  return person.age !== undefined
    ? `${person.name}: ${person.age} years`
    : person.name;
};

console.log(getPersonDetails(person1));
