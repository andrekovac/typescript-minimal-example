type Person = {
  name: string;
  age?: number;
};

const person1: Person = {
  name: "Andre",
  age: 16,
};

const getPersonDetails = (person: Person) => {
  return person.age !== undefined
    ? `${person.name}: ${person.age} years`
    : person.name;
};

console.log(getPersonDetails(person1));
