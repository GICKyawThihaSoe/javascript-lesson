let name = "Mg Mg"; // variable single value
let names = ["Mg Mg","Aung Aung","Tun Tun",20,true]; // multiple values

console.log(name);
console.log(names);

let arr = ["Mg Mg","Aung Aung","Tun Tun",20,true];
console.table(arr);
console.log(arr[0]);
console.log(arr[3]);
console.log(arr[4]);

let arr1 = [
    [1,2,3],
    [4,5,6]
]
console.table(arr1);
console.log(arr1[1][2]);

let arr2 = [
    [1,2,[7,8,9]],
    [4,5,6]
]

console.table(arr2);
console.log(arr2[0][2][1]);