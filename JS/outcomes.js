/*OUTCOMES FROM PAGE0*/
var divideFoodChoice = "true";

// Hides Page 0 Content & calls correct consequence function
function option1() {
    document.getElementById("page0").style.display = "none";
    consequence1();
}
// Hides PAge 0 Content & calls correct consequence function
function option2() {
    document.getElementById("page0").style.display = "none";
    consequence2();
}
// Adds consequence1 message
function consequence1() {
    // Show outcomes section
    document.getElementById("outcomes").style.display = "block";
    // Hide other consequence text element
    document.getElementById("consequence2").style.display = "none";
    // Add message to p element
    var message;
    message = "Dividing up the remaining food has given a morale boost to the crew and they will fight better.";
    document.getElementById("consequence1").innerHTML = message;
}
//Adds consequence2 message
function consequence2() {
    // Show outcomes section
    document.getElementById("outcomes").style.display = "block";
    // Hide other consequence text element
    document.getElementById("consequence1").style.display = "none";
    // Add message to p element
    var message;
    message = "Saving the food has caused the crew’s morale to decrease.";
    document.getElementById("consequence2").innerHTML = message;
}
// Continue Button
function continueButton() {
    window.location.href = "../HTML/page1.html";
}