const listarPropiedades = require("../ejercicios/05");

test("listarPropiedades returns an array with all properties of an object", () => {
  const obj = {
    name: "John",
    age: 30,
    city: "New York",
  };
  expect(listarPropiedades(obj)).toEqual(["name", "age", "city"]);
});

test("listarPropiedades returns an empty array when passed an empty object", () => {
  const obj = {};
  expect(listarPropiedades(obj)).toEqual([]);
});

test("listarPropiedades returns an array with all properties of an object with nested objects", () => {
  const obj = {
    name: "John",
    age: 30,
    address: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
    },
  };
  expect(listarPropiedades(obj)).toEqual(["name", "age", "address"]);
});

test("listarPropiedades returns an array with all properties of an object with arrays", () => {
  const obj = {
    name: "John",
    age: 30,
    hobbies: ["reading", "swimming", "traveling"],
  };
  expect(listarPropiedades(obj)).toEqual(["name", "age", "hobbies"]);
});

function listarPropiedades(objeto) {
  return Object.keys(objeto);
}

const obj5 = { name: "John", age: 30, city: "New York" };
console.log(listarPropiedades(obj5)); 

const obj6 = {};
console.log(listarPropiedades(obj6)); 

const obj7 = { name: "John", age: 30, address: { street: "123 Main St", city: "New York", state: "NY" } };
console.log(listarPropiedades(obj7)); 

const obj8 = { name: "John", age: 30, hobbies: ["reading", "swimming", "traveling"] };
console.log(listarPropiedades(obj8)); 
