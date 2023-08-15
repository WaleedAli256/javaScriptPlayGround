console.log("let start to swipe values");
var a = 1;
var b = 2;
var tem = a;
a = b;
b = tem;
console.log("a real value is 1 but after swip = ", a);

console.log("b real value is 2 but after swip = ", b);

console.log(" without using third variable ");

a = 1;
b = 2;

a = a + b;
console.log(" a = a + b; then a = ", a);

b = a - b;
console.log(" b = a - b;; then b = ", b);

a = a - b;
console.log(" a = a - b;; then a = ", a);
