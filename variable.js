//1. Use strict
'use strict';
console.log('Hello World !!!');

//2. let added in ES6

let name = 'jay';
console.log(name);

//var 쓰지마라...!
// var hoisting  끌어올려주다.  할당 후에 선언해도 선언이 맨위로 올라간다.
// has no block scope 
{       
age = 4
var age;
console.log(age);
}

//3. Constant 값을 변경할 수 없다.

//4. Variable type
// function. first-class function
// js 에서 는 number 하나만 쓰면 된다.
// '' 빽티를 쓰면 문자열을 편하게 출력할 수 있다.
const bbb ='BBBB';
console.log(`value1: ${bbb} hi, type:${typeof bbb}`);

// boolean
// false : 0, null, undefined, NaN, ''
// true : any other value

//null 변수를 생성하고 null 로 초기화 할 수 있다. undefined와 차별화 된다.
let nothing = null;
console.log(`value2: ${nothing}, type : ${typeof nothing}`);

// undefined  변수를 생성하고 초기화 하지 않으면 undefined 가 된다.
let x;
console.log(`value3: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id'); 
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
console.log(`symbol4 ${symbol1.description}`);

// 5. Dynamic typing : dynamically typed language
let text = 'hello';
console.log(`value5: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value6: ${text} , type: ${typeof text}`);
text = '7' +5;
console.log(`value7: ${text}, type : ${typeof text}`);





