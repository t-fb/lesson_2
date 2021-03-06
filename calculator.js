// ask the user for the first number
// ask the user for the second number
//ask the user for the operation
// perform operation
//display result of the operation

const MESSAGES = require('./calcmess.json');

const readline = require('readline-sync');

const LANGUAGE = 'en';

// message arguemnt is a key in json package
function messages(message, lang = 'en') {
  return MESSAGES[lang][message];
}

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

prompt(MESSAGES['welcome']);

while (true) {
  prompt('What is the first number?');
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt('Hmmm... not a valid number.');
    number1 = readline.question();
  }

  prompt('What is the second number?');
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt('Hmmm... not a valid number.');
    debugger;
    number2 = readline.question();
  }

  console.log(
    'What operation would you like to perform?\n 1) Add 2) Subtract 3) Multiply 4) Divide'
  );
  let operation = readline.question();

  // while it doesnt include 1,2,3,4
  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('Must choose: 1,2,3,4');
    operation = readline.question();
  }

  let output;

  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  prompt(`The result is ${output}`);

  prompt('Peform another calculation? (y/n)');
  let answer = readline.question();
  if (answer !== 'y') break;
}
