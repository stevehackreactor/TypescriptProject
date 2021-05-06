// union type, increases extensibility

function combine(
    input1: number | string,
    input2: number | string,
    resultConversion: string
) {
  let result;

  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2; // error here is not technically correct, typescript just sees that we have a union type and thinks we are making a mistake
  } else {
    result = input1.toString() + input2.toString();
  }
  if (resultConversion === 'as-number') {
    return +result;
  } else {
    return result.toString();
  }
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedNums = combine('2', '77', 'as-number');
console.log(combinedNums);

const combinedNames = combine('max', 'anna', 'as-text');
console.log(combinedNames);