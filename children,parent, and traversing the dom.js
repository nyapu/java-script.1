console.log('i am in tutorial 15');//document object module(dom)

let cont=document.querySelector('.level');
cont=document.querySelector('.container');
//console.log(cont.childNodes);
// console.log(cont.children);
let nodeName=cont.childNodes[3].nodeName;
let nodeType=cont.childNodes[3].nodeName;
console.log(nodeName);
console.log(nodeType);

/* Node types
1. element
2.attribute
3.Text node
8.comment
9.document
10.doc type*/


let container=document.querySelector('div.container');
// console.log(container.firstChild);
// console.log(container.firstElementChild);

// console.log(container.lastChild);
// console.log(container.lastElementChild);
// console.log(container.childElementCount);//count of chile element;
// console.log(container.firstElementChild)
// console.log(container.firstElementChild.parentNode);
// console.log(container.firstElementChild.nextSibling);

console.log(container.firstElementChild.nextElementSibling);
console.log(container.firstElementChild.nextElementSibling.nextElementSibling);
