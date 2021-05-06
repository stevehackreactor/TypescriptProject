function addTo(n1: number, n2: number, showResult: boolean, phrase: string) {
  // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
  //   console.error('input was not a number');
  // }
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

const number1 = 5; // 5.0
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: ';

const sum = addTo(number1, number2, printResult, resultPhrase);
console.log(sum);

// core Syntax and features of typescript.

// just one number type in javascript.
// string type 'hi', "hi", `hi`
// boolean datatype (true or false)

