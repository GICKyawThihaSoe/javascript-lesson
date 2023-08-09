let num = 20;

console.log(num);
console.log(typeof num);

let str = num.toString();

console.log(str);
console.log(typeof str);
console.log("********");
let string = "30";
let number = Number(string);
console.log(number);
console.log(typeof number);
console.log("********");
let nan = "20hello";
let NaNmuber = Number(nan);
console.log(NaNmuber);
console.log(typeof NaNmuber)
console.log("********");
let a = "20";
let b = parseInt(a);
console.log(b);
console.log(typeof b);
console.log("********");
let c = "20.212213";
let d = parseFloat(c);
console.log(d);
console.log(typeof d);
console.log("********");
let ab = "20.212213";
let cd = Number(ab).toFixed(2);
console.log(cd);
console.log(typeof cd);