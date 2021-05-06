// union type, increases extensibility
function combine(input1, input2) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2; // error here is not technically correct, typescript just sees that we have a union type and thinks we are making a mistake
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedAges = combine(30, 26);
console.log(combinedAges);
var combinedNames = combine('max', 'anna');
console.log(combinedNames);
