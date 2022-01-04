var firstForm = document.getElementById("box");
var secondForm = document.querySelectorAll("#second");
var sectorWrapper = document.getElementById("sector-wrapper");
var box = document.getElementById("box");
var box2 = document.getElementById("box2");
var sectorWrapper = document.getElementById("sector-wrapper");
// default sector wrapper is hidden 
sectorWrapper.style.display = "none";

document.getElementById("FI").addEventListener("click", () => {
    // hide sector wrapper 
    sectorWrapper.style.display = "none";
    box.style.display = "block";
    box2.style.display = "none";
})

document.getElementById("NFI").addEventListener("click", () => {
    // enable sector wrapper 
    sectorWrapper.style.display = "block";
    box.style.display = "none";
    box2.style.display = "block";
})
