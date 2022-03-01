console.log('i am in tutorial 16');


let element=document.createElement('li')
let text=document.createTextNode('text node ho');
element.appendChild(text);

//Add a class name to the li element 
 element.className='mydream';
element.id='hero';
element.setAttribute('title','mytitle');
// element.innerText='hello world my name is sudip sunar'
//element.innerHTML='<b>my name is sameer tiruwa </b>';



let ul=document.querySelector('ul.dream');
ul.appendChild(element)
// console.log(ul)
// console.log(element)

let elem2=document.createElement('h3');
elem2.id='elem2';
elem2.className='elem2';
let tnode=document.createTextNode('this is amazing');
elem2.appendChild(tnode);
element.replaceWith(elem2);

// let dream=document.getElementById('dream');
// dream.replaceChild(element,document.getElementById('lo'))

let pr=elem2.hasAttribute('href');
//elem2.removeAttribute('id');
elem2.setAttribute('titile','success is not a ending point');
console.log(elem2,pr);




/* quick quize 
cerate a heading element with text as  "Go to codewithharry "and
create an a tag outside it with href="https://codewithharry";*/


let harry=document.createElement('a');
harry.setAttribute("href",'https//:www.codewiithharry.com');
console.log(harry);

let harmony=document.createTextNode('this is code with harry');
harry.appendChild(harmony);
