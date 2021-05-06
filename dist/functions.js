"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult2(num) {
    console.log('Result: ' + num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
printResult2(add(5, 12));
console.log(printResult2(add(5, 12)));
var combineValues;
combineValues = add;
console.log(combineValues(8, 8));
addAndHandle(1, 4, function (num) {
    console.log('this is the num: ' + num);
});
