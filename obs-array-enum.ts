// const person: {
//   name: string;
//   age: number;
// } = {
// const person: {
//   name: string;
//   age: number;
//   hobbie: string[];
//   role: [number, string];
// } = {
//   name: "Max",
//   age: 30,
//   hobbie: ["sport", "Cooking"],
//   // Tuple for fix size of array and type of elements
//   role: [2, "author"],
// };

// person.role.push("admin"); // can push in Tuple
// person.role[1] = 10;

// console.log(person.role);

// person.role = [0, "admin" , "user"];

// let favoriteActivities: string[];
// favoriteActivities = ["Sports"];

// console.log(person);

// for (const hobby of person.hobbie) {
//   console.log(hobby.toUpperCase());
// }

// ENUM
// const ADMIN = 0
// const READ_ONLY = 1
// const AUTHOR = 2

enum Role { // can use number or string || start from 0
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Max",
  age: 30,
  role: Role.ADMIN,
};

if (person.role === 0) {
  console.log("is admin");
}
