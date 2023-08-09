var num = 20; // global
let count = 10; // block
console.log(window.num);
console.log(window.count);
/******/
for (let i = 0; i < 10; i++) {
  console.log(i);
}
/******/
for (var a = 0; a < 10; a++) {
  console.log(a);
}
console.log(a);
/******/
(doIt = () =>{
    let count = 400;
    var nudd = 600;
    console.log(count);
    console.log(nudd);
})()
/******/
var ab = 20; // global, redeclearable
let cc = 30; // block
