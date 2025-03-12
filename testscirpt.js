myitem = document.getElementById("firsttest");
Otheritem = document.getElementById("thebutton");
footerName = document.getElementById("footer");

myitem.addEventListener("click", onClick);
myitem.addEventListener("mouseover", onMouseOver);
myitem.addEventListener("mouseout", onMouseOut);

Otheritem.addEventListener("click", darkMode);

textentry = document.getElementById("myinput");  
textentry.addEventListener("change", onChange);



function onClick() {  
    myitem.style.color = "green";  
    myitem.style.fontSize = "20px";
    myitem.style.fontWeight = "bold";
    myitem.style.textDecoration = "underline";
}

function onMouseOver() {
    myitem.style.backgroundColor = "beige";
}

function onMouseOut() {
    myitem.style.backgroundColor = "white"; 
}

function darkMode() {
    document.body.style.backgroundColor = "darkgrey";
    Otheritem.style.backgroundColor = "black";
}

// Function to change the footer text Name to new authoer name
function onChange() {  
    newtext = myinput.value;  
    footerName.innerHTML = newtext;  
}