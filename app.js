let numbers = [12,43,55,1,6,9,2,5];
numbers.sort();
console.log(numbers);
/*******/
let numbers2 = [12,43,55,1,6,9,2,5];
function filter(x,y){
    return x - y;
}
numbers2.sort(filter);
console.log(numbers2);
/*******/
let numbers3 = [12,43,55,1,6,9,2,5];
function filter2(x,y){
    return y - x;
}
numbers3.sort(filter2);
console.log(numbers3);
/*******/
let num = [12,43,55,1,6,9,2,5];
num.sort((x,y)=> x - y);
console.log(num);
/*******/
let num2 = [12,43,55,6,9,2,5];
let result = num2.find(x => x < 12);
console.log(result);
/*******/
let ac = [12,43,55,6,9,2,5];
let ary = new Array(123,444,222);
let resultto = ac.concat(ary);
console.log(resultto);