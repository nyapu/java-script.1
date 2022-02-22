console.log('i am in tutorial 13')
//Exercise 1
// you have to creat a variable which is a string 
//containing the text which is a link you are intersted in
// you have to fetch all the links from a  given page
// which contais this text 

/*
codewithharry.com
javascript*/


/*  SOLUTION BY SAMEER TIRUWA*/
Z=document.links;

let a='Harry';
let b ='javascript';
 Array.from(Z).forEach(function(element){
     if(String(element).includes(b)){
         console.log(element)
     };
 });