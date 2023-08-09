let oldH1 = document.querySelector("#head");
let text = document.createTextNode("New Header");
let newH1 = document.createElement("h1");
newH1.appendChild(text);
newH1.className = "biber";
newH1.id = "bib";
let body = oldH1.parentNode;
body.replaceChild(newH1,oldH1);
