myitem = document.getElementById("firsttest");
Otheritem = document.getElementById("thebutton");
footerName = document.getElementById("footer");

myitem.addEventListener("click", onClick);
myitem.addEventListener("mouseover", onMouseOver);
myitem.addEventListener("mouseout", onMouseOut);

Otheritem.addEventListener("click", darkMode);

textentry = document.getElementById("myinput");
textentry.addEventListener("change", onChange);



//function to make image clickable and smaller or larger when clicked
   // Open modal and show the enlarged image
   function openModal() {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var thumbnail = document.getElementById("gradStudents");

    modal.style.display = "block";
    modalImg.src = thumbnail.src;
}

// Close modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

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
// When the image is clicked on, it should expand to a larger size that does not extend outside the bounds of the window. When the user clicks on the image again, it should shrink back to the thumbnail size.

