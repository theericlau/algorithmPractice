/*

I forget exactly what they called the calculator, but the question was essentially to code a RPN calculator that incorporates parenthesis and an indeterminate amount of numbers per operation (where as RPN will always be only two numbers per operation). An example being "( add 1 ( mul 3 4 ) )" = 13.
*/

var string = "( add 1 ( mul 3 4 ) )";

// var string = "( add 1 ( mul ( add 3 add 5 ) (minus 3 add 4)))"

const operators = {
  add: '+',
  sub: '-',
  mul: ,
  div: '/',
}

const calculator = string => {
  let operation = string.split(' ');
  //create a stack
  //loop into the array
    //if current is a closing
      //start popping til you reach an open
    //else just push into stack
  //return the stack

}

console.log(calculator(string));