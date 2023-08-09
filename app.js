let name = prompt("What is your name?");
document.querySelector("#head").innerHTML = name;

let con = confirm("is your age over 18");
let answer = con ? "Yes over 18" : "No under 18";
document.querySelector(".para").innerHTML = answer;