// looking at ojects
// this empty export statement causes Typescript to treat this file as a module and thus doesn't check if it conflicts with global consts like the one which will be created in app.js after this compiles.

export {};

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'Steve',
//   age: 32,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author']
// }

// const Admin = 0;
// const User = 1;
// const Customer = 2;

enum Role { ADMIN = 5, READ_ONLY, AUTHOR}; // Counts up from the first explicitly numbered ENUM in this example, 5
// so, the enums of the above 3 roles would be 5, 6, 7. You can explicitly lable multiple or even all enums with specific nubmers

const person = {
  name: 'Steve',
  age: 32,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
}

// person.role.push('admin'); // push gets around typescript's ability to catch things entering tuples which should not.

// person.role[1] = 10; !!!
// person.role = [0, 'writer', 'user']; // while not pushing but explicitly assigning a value to a position in a tuple beyond index 1, you will get an error

let favoriteActivities: string[];
// any[] allows you to have a mixed array
// should not be used that frequently as it gives up the
// benefits that typescript offers
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); !!! as TS knows this is not an array
}

if (person.role === Role.AUTHOR) {
  console.log('is admin');
}
// any is very flexible, but it should be avoided whenever possible