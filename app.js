let now = new Date();
console.log(now);
console.log(now.getDay());
console.log(now.getMonth() + 1);
console.log(now.getDate());
console.log(now.getFullYear());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());
console.log(now.getTime());
/*****/
let dd = new Date();
let ddc = dd.toString();
console.log(typeof ddc);
/*****/
let da = new Date("02/24/2003");
console.log(da);
/*****/
let dab = new Date("February 24 2003 10:33:22");
console.log(dab);
/*****/
let aa = new Date("February 24 2003 10:33:22");
aa.setDate(11);
console.log(aa);