//global

const students = [
  { name: "Christina", language: "en" },
  { name: "Daniel", language: "fr" },
  { name: "Emily", language: "es" },
  { name: "Padma", language: "te" },
];

function sayHello() {
  // function scope
  const hello = {
    en: "Hello",
    fr: "Bonjour",
    es: "Hola",
    te: "Namaste",
  };
  console.log(students);
}

console.log(hello);
