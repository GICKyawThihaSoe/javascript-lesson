let list = document.querySelector(".lis");
for(let i = 0; i < list.childNodes.length; i++){
    let node = list.childNodes[i];
    if(node.nodeType == 1){
        console.log(node.childNodes[0].textContent);
        console.log(list.childElementCount);
    }
}