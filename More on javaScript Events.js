console.log('i am in tutorial 18');

/*
let btn=document.getElementById('btn');
btn.addEventListener('click',func1);

btn.addEventListener('dblclick',func2);
btn.addEventListener('mousedown',func3);

function func1(e){
    console.log("thanks for click",e);
    e.preventDefault();
}

function func2(e){
    console.log("thanks for double click",e);
    e.preventDefault();
}

function func3(e){
    console.log("thanks its a mouse down",e);
    e.preventDefault();
}*/
/*
document.querySelector('.hera').addEventListener
('mouseenter',function(){
    console.log('you entered no')
})

document.querySelector('.hera').addEventListener
('mouseleave',function(){
    console.log('you  exited')
})*/
// document.querySelector('.container').addEventListener
//  ('mousemove',function(){
//      console.log('you triggered mouse move event');
// })
document.querySelector('.container').addEventListener
 ('mousemove',function(e){
     console.log(e.offsetX,e.offsetY);
     document.body.style.backgroundColor=`rgb(${e.offsetX},${e.offsetX},${e.offsetY})`;
     console.log('you triggered mouse move event');
})