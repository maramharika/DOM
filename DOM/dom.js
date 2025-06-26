document.title="DOM in java script";
document.body.style.backgroundColor="aqua";
document.getElementById("header").innerHTML="Hello World!!!";
document.getElementById("para").style.color="red";
document.getElementById("para").style.fontSize="38px";
document.getElementsByTagName("h1")[1].style.color="blue";
document.getElementsByTagName("h1")[1].style.fontSize="40px";
 let harika=document.getElementsByClassName("ds");
 harika[0].style.color="blue";
 harika[1].style.color="red";
//[0].style.color="red";
//document.getElementsByClassName("ds")[1].style.color="blue";
document.getElementsByClassName("ds")[0].style.fontSize="25px";
document.getElementsByClassName("ds")[1].style.fontSize="25px";
/*let variable=document.getElementsByClassName("cse");
variable[0].style.color="grey";
variable[1].style.color="pink";
variable[2].style.color="white";*/
document.querySelector(".cse").style.color="yellow";
let dept=document.querySelectorAll(".cse");
dept[0].style.color="red";
dept[1].style.color="blue";
dept[2].style.color="green";
let kavya=document.querySelectorAll(".ec");
kavya[0].style.color="blue";
kavya[1].style.color="red";
kavya[2].style.color="green";
kavya[0].style.fontSize="25px";
kavya[1].style.fontSize="25px";
kavya[2].style.fontSize="25px";
  /* if( document.body.style.backgroundColor==="lightblue")
   {
    document.body.style.backgroundColor="pink";
   }
   else{
    document.body.style.backgroundColor="lightblue";
   }
    alert("Backround color change to pink");*/
    function changeBackground(){
document.body.style.backgroundColor=document.body.style.backgroundColor === 
"lightgreen" ?"lightyellow" :"lightgreen";
}
function changetext(){
    document.getElementById("clg").innerHTML="hello my name is harika studying b-tech 3rd year"
    document.getElementById("clg").style.color="red";
    document.getElementById("clg").style.backgroundColor="pink";
    document.getElementById("clg").style.textAlign="center";
    
}

