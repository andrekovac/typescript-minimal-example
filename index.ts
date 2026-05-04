enum PersonKind {
  Student = "student",
  Teacher = "teacher",
}

type Person = {
  name: string; // required
  age?: number; // optional
  kind: PersonKind;
};

const person1: Person = {
  name: "André",
  age: 39,
  kind: PersonKind.Teacher,
};

const getPersonDetails = (person: Person): string => {
  return person.age === undefined
    ? person.name
    : `${person.name}: ${person.age} years`;
};

console.log(getPersonDetails(person1));
