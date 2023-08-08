let users = [
    {
        name: "Mg Mg",
        age: 20,
        school: "ygn",
    },
    {
        name: "Kyaw Kyaw",
        age: 21,
        school: "Mdy",
    },
    {
        name: "Bo Bo",
        age: 22,
        school: "yeu",
    },
    {
        name: "Tun Tun",
        age: 23,
        school: "shwebo",
    },
    {
        name: "Su Su",
        age: 24,
        school: "japan",
    },
]

users.forEach((user)=>{
    console.log(user.name);
})
console.log("*******");

users.map((user)=>{
    console.log(user.name);
})

console.log("*******");

let ind = users.findIndex(user=>user.age == 23);
console.log(users[ind]);