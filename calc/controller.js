window.addEventListener("load",()=>{
var buttons=document.querySelectorAll("button");
for(let i=0;i<=buttons.length;i++)
{
    buttons[i].addEventListener("click",doOperations);
}
});
function doOperations(){
console.log("button clicked",this.innerHTML);

var opr=this.innerHTML;
var calcObject=new Calculator();
var firstNo=document.querySelector("#firstno").value;
var secondNo=document.querySelector("#secondno").value;

var result=0;   
result=calcObject.operation(firstNo,secondNo,opr);
document.querySelector("#result").innerHTML= result;
}