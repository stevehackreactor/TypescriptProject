"use strict";
var userInput;
var userName;
userInput = 2;
userInput = 'hello';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
function infiniteLoop(n1, n2) {
    while (true) {
    }
}
generateError('An error occurred!', 500);
