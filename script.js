


var firstForm=document.getElementById("box");
var secondForm=document.querySelectorAll("#second");

var box2=document.getElementById("box2");

var FI=document.getElementById("FI");
FI.addEventListener("click",()=>{

    firstForm.style.visibility= "visible";
    secondForm[0].style.visibility= "visible";
    secondForm[1].style.visibility= "visible";
    box2.style.display="none";
    firstForm.style.color="red";
    console.log("red");
})

var NFI=document.getElementById("NFI");

NFI.addEventListener("click",()=>{

firstForm.style.visibility="hidden";
box2.style.visibility="visible";
secondForm[0].style.visibility="hidden";
secondForm[1].style.visibility="visible";
    
    })
