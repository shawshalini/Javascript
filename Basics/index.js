/*console.log("Hello World");
//alert("me");
console.warn("this is warning");
console.error("this is error");*/
/*var num1=12
var num2=11.78;
console.log(num1+num2);
//Data Types in javascript
/*var marks={
    ravi:76,
    shayam:67,
    sweta:54

};*/
//Boolean Types in javascipt
/*var a=true;
var b=false;
console.log(a,b);*/
// var und;
// console.log(und);
/*function avg(a,b){
    return (a+b)/2;
}
c1=avg(5,10);
c2=avg(15,30);
console.log(c1,c2);*/
//var arr=[1,2,3,4,5,6,7]
// for(var i=0;i<arr.length;i++){
//     console.log(arr[i])
// 
/* arr.forEach(function(element)){
    console.log(element)
}*/
/*let mydate=new Date();
console.log(mydate);
console.log(mydate.getDay());
console.log(mydate.getTime());
console.log(mydate.getFullYear());*/
//let elemclass=document.getElementsByClassName('container');
//console.log(elemclass);
/*elemclass[0].style.background="yellow";
elemclass[1].classList.add("bg-primary");
elemclass[0].classList.add("text-success");
elemclass[0].classList.remove("text-success");
console.log(elemclass.innerHTML);
console.log(elemclass[0].innerText);*/
/*let tn=document.getElementsByTagName('div');
console.log(tn);
createdElement=document.createElement('p');
createdElement.innerText="This is another para";
tn[0].appendChild(createdElement);
createdElement2=document.createElement('b');
createdElement2.innerText="This is bold para";
tn[0].replaceChild(createdElement2,createdElement);
//removeChild(createdElement2);
let sel=document.querySelectorAll('.container');
console.log(sel);

FirstContainer.addEventListener('Clicked',function(){
    document.querySelectorAll('.container')[1].innerHTML="<b> We have Clicked</b>"
    console.log("Button was Clicked");
}
)*/
  

/*FirstContainer.addEventListener('mouseup',function()
{
    console.log("Mouse up when clicked on container");
}
)
FirstContainer.addEventListener('mousedown',function()
{
    console.log("Mouse down when clicked on container");
}
)*/
logkaro=()=>{
    document.querySelectorAll('.container')[1].innerHTML="<b> Set interval fired </b>"
    console.log("I am log");
}

clr=setInterval(logkaro,2000);







