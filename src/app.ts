let userInput: unknown;
// unknown is different from any
let userName: string;

userInput = 2;
userInput = 'hello';
if (typeof userInput === 'string') {
  userName = userInput; // throws an error because userInput is not explicitly the string that we want/expect.
  // once we move this into this if statement, no more error
}

// never type: used as the return value when a function actually never reaches a return value
// specifically usefull for throwing errors as throwing errors crashes the script and never reaches return values

function generateError(message: string, code: number): never { // without explicitly stating never, TS infers void. But never is better in this case.
  throw {message: message, errorCode: code}; // never returns, not even undefined
}

function infiniteLoop(n1: number, n2: number): never { // will never reach return statement
  while(true) {
    // goes forever
  }
}

generateError('An error occurred!', 500);