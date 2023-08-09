let person = {
    name: "Kyaw Kyaw",
    borther: "Aung Aung",
    sister: "Su Su",
    parents: ["U Mya","Daw Nu"],
    age: 20
}

let kyawkyawdata = `
<h5>${person.name} Resume</h5>
<ul>
    <li>Father : ${person.parents[0]}</li>
    <li>Mother : ${person.parents[1]}</li>
    <li>Brother : ${person.borther}</li>
    <li>Sister : ${person.sister}</li>
    <li>Age : ${person.age}</li>
</ul>
`
document.querySelector('.para').innerHTML = kyawkyawdata;