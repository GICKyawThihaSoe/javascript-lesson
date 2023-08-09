let a = [1,2,3,4,5];
console.log(a.length);
console.log(a.toString());
/*****/
let b = [1,2,3,4,5];
let bol = Array.isArray(b);
let bb = "String";
let bol2 = Array.isArray(bb);
console.log(bol);
console.log(bol2);
/*****/
let ab = [1,2,3,4,5,6,7,8];
console.log(ab[2]);
ab[2] = 200;
console.log(ab[2]);
/*****/
let bc = [1,2,3,4,5,6,7,8];
let ind = bc.indexOf(5);
console.log(ind);
/*****/
let dd = [1,2,3,4,5,6,7,8];
console.log(dd);
dd.push(300);
console.log(dd);
/*****/
let ad = [1,2,3,4,5,6,7,8];
console.log(ad);
ad.unshift(300);
console.log(ad);
/*****/
let da = [1,2,3,4,5,6,7,8];
console.log(da);
da.pop(8);
console.log(da);
/*****/
let dad = [8,1,2,3,4,5,6,7,8];
console.log(dad);
dad.shift(8);
console.log(dad);
/*****/
let abc = [1,2,3,4,5,6,7,8];
console.log(abc);
abc.splice(2,1);
console.log(abc);
/*****/
let abc1 = [1,2,3,4,5,6,7,8];
console.log(abc1);
abc1.splice(2,3);
console.log(abc1);
/*****/
let arv = [1,2,3,4,5,6,7,8];
console.log(arv);
arv.reverse();
console.log(arv);
/*****/
let avv = [1,2,3,4,5,6,7,8];
let avv2 = [1,2,3,4,5,6,7,8];
let combine = avv.concat(avv2);
console.log(combine);