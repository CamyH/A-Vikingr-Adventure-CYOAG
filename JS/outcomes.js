/*OUTCOMES FROM PAGE0*/
function goToPage1() {
    // Progress to next page
    window.location.href = "../HTML/page1.html";
}
function divideFood() {
    //document.getElementById("consequence1").style.display = "block";
    var textNode = document.createTextNode("Dividing up the remaining food has given a morale boost to Sven's crew and they will fight better.");
    document.body.appendChild(textNode);
}
function saveForLater() {
    // Progress to next page
    window.location.href = "../HTML/page1.html";
}


function continueButton() {
    document.getElementById("page1").style.display = "block";
}

window.onload = divideFood();