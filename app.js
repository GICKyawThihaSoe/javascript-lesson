let person = {
    name: "Mg Mg",
    age: 20,
    married: false,
    family: ["U Ba","Daw Mya","Su Su"],
    own:{
        car: "Toyota",
        bike: "Moutain Bike"
    },
    doIt: function () {
        console.log(this.name + " is riding a " + this.own.bike);
    }
}

console.log(person.name);
console.log(person.family[1]);
console.log(person.own.car);    
console.log(person.doIt());

let json = JSON.stringify(person);
console.log(json);
console.log(JSON.parse(json));