// function types and usage

function add(n1: number, n2: number): number { // if you know what the output should be, this is an easy place to make sure you are returning the correcty type of val
  return n1 + n2;
}

function printResult2(num: number): void { // you don't need to specify void here because Typescript inferred that by lack of return statement. But if you know your
  // program should not be returning anything, explicitly stating this could be helpful.
  console.log('Result: ' + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult2(add(5, 12));
console.log(printResult2(add(5, 12)));

// functions are not allowed to have the type function add(n1:num, n2:num): undefined. Functions should use :void instead
// variables can have a type of undefined but this is not very useful
// let combineValuse: Function
let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = 3; throws an error because it isn't a function
// combineValues = printResult2; //doesn't throw an error while combineValues type is Function but does with the more explicit type but is not the correct function

console.log(combineValues(8, 8));

addAndHandle(1, 4, (num) => {
  console.log('this is the num: ' + num);
});
