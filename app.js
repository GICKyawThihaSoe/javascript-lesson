const person = {
    name: "Mg Mg",
    age: 20,
}
person.name = "Kyaw Kyaw"
console.table(person);

const con = "Mg Mg"; // cannot reassign a constant
console.log(con); 

const array = new Array(1,2,3,4);

array[1] = 20;

console.table(array);

let x = 20;
let y = 30;
let a = x + y;
let b = x - y;
let c = x * y;
let d = x / y;
let e = x % y;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

let ab = 20;
ab = ab + 1;
console.log(ab);

let cd = 20;
cd += 1;
console.log(cd);

let de = 20;
de ++;
console.log(de);

let ef = 20;
console.log(ef++);
console.log(ef);

let ac = 20;
console.log(++ac);