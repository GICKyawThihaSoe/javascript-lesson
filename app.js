// fuction default value
function doIt(name = 'Mg Mg'){
    console.log(name);
}
doIt();
/******/

// fuction default value
function doIt2(name = 'Mg Mg'){
    console.log(name);
}
doIt2('Kyaw Kyaw'); 
/******/

// function expression  
let dd = function(){
    console.log("I am Kyaw Kyaw");
}
dd();
/******/

// function expression with arrow function
let aa = () =>{
    console.log("I am Bo Bo");
}
aa();   
/******/

// Immidaiately Invokable Function Expression (IIFEs)
(function (){
    console.log("Hey Now");
})();
/******/

// Immidaiately Invokable Function Expression (IIFEs) with arrow function
(()=>console.log("hello world"))();
/******/

// Function Inside Object
let obj = {
    name: "Mg Mg",
    age: 20,
    dd: function(){
        console.log("I am a function inside a object!");
    }
}
obj.dd();