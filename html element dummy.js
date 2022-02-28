console.log('remaining part of 14');

//2 Multi element selector

let elems=document.getElementsByClassName('jclass');
elems=document.getElementsByClassName('level');
// console.log(elems[2]);
elems=document.getElementsByName('div');
console.log(elems);

Array.from(elems).forEach(element =>{
    console.log(element);
});
