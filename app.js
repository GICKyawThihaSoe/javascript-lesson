let scripts = document.scripts;
let scriptsArray = Array.from(scripts);
scriptsArray.forEach((scripts)=>{
    console.log(scripts.src);
})

let btn = document.querySelector(".btn");
btn.onclick = () =>{
    alert(123);
}
let btn2 = document.querySelector("#btn");
btn2.onclick = ()=>{
    alert(456);
}