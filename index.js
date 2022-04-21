// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// Input: 'India is my country'
// Output: 'country my is India'

// function reverse (str) {
//   let tempString = '';
//   let stringArray = [];
//   for(let i =0; i< str.length; i++) {
//     if(str[i] !== ' ') {
//       tempString = tempString + str[i];
//     } else {
//       stringArray.push(tempString);
//       tempString = '';
//     }
//   }
//   stringArray.push(tempString);
//   let reverString =[];
//   for(let i = 0; i< stringArray.length;i++) {
//     reverString.push(stringArray[stringArray.length-i-1]);
//   }
//   let reverseStr = '';
//   for(let index = 0; index < reverString.length; index++) {
//     if(index !== reverString.length-1) {
//       reverseStr += reverString[index] + ' ';
//     } else {
//       reverseStr += reverString[index];
//     }
//   }
//   console.log(reverseStr);
// }

// reverse('India is my country')

// adder(10) //10
// adder(20) // 10+20 =30
// adder(30) // 10+20+30 = 60

function adder(num) {
  var sum = 0;
  sum = sum + num;
  function another(sum) {
    return sum;
  }
  another(sum);
}

console.log(adder(10));
console.log(adder(20));
console.log(adder(30));
console.log(adder(40));

var Foo = function (a) {
  this.bar = () => {
    return a;
  };
  var baz = function () {
    return a;
  };
};
Foo.prototype = {
  biz: () => {
    return this.bar();
  },
};
var f = new Foo(7);
f.bar();
f.baz();
f.biz();

// a ={p: 'test'} b ={p: 'test'}
// a==b?
// a===b?

// web Storage
