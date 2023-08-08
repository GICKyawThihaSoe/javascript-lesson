// Control Flow
// if , if else, if - else if - else
// switch
// for , while , dowhile
// for in , foreach

// when start and end point are already know "For Loop"
// when end point is not sure "While Loop"
// when at least one time work "Do While"

let name = "Mg Mg";
console.log(name.length);

let data =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

let dd = data.split(" ");
dd.forEach((val, i) => {
  console.log(val + " " + i);
});

let data1 = ["one", "two", "three", "four", "five"];

for (let i = 0; i < data1.length; i++) {
  console.log(data1[i]);
}
console.log("*************");
let i = 0;
while (i < data1.length) {
  console.log(data1[i]);
  i++;
}
console.log("*************");
let t = 0;
do {
  console.log(data1[t]);
  t++;
} while (t < data1.length);
console.log("*************");
data1.forEach((val,i)=>{
    console.log(val + " " + i);
})