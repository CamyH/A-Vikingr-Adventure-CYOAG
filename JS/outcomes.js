/*OUTCOMES FOR PAGE0*/

// Hides Page 0 Content & calls correct consequence function
function option1Index() {
    document.getElementById("page0").style.display = "none";
    consequence1Index();
}
// Hides Page 0 Content & calls correct consequence function
function option2Index() {
    document.getElementById("page0").style.display = "none";
    consequence2Index();
}
// Adds consequence1 message
function consequence1Index() {
    // Show outcomes section
    document.getElementById("outcomes-index").style.display = "block";
    // Hide other consequence text element
    document.getElementById("consequence2").style.display = "none";
    // Add message to p element
    var message;
    message = "Dividing up the remaining food has given a morale boost to the crew and they will fight better.";
    document.getElementById("consequence1").innerHTML = message;
}
//Adds consequence2 message
function consequence2Index() {
    // Show outcomes section
    document.getElementById("outcomes-index").style.display = "block";
    // Hide other consequence text element
    document.getElementById("consequence1").style.display = "none";
    // Add message to p element
    var message;
    message = "Saving the food has caused the crew’s morale to decrease.";
    document.getElementById("consequence2").innerHTML = message;
}

/*OUTCOMES FOR PAGE1*/

// Hides Page1 content and calls correct consequence function
function option1Page1() {
    document.getElementById("page1").style.display = "none";
    consequence1Page1();
}
// Hides Page1 content and calls correct consequence function
function option2Page1() {
    document.getElementById("page1").style.display = "none";
    consequence2Page1();
}

// Adds consequence1 message
function consequence1Page1() {
    // Show outcomes section
    document.getElementById("outcomes-page1").style.display = "block";
    // Hide other consequence text element
    document.getElementById("consequence2").style.display = "none";
    // Add message to p element
    var message;
    message = "This was the safest option and results in killing all but one soldier who you strike down when entering the camp.";
    document.getElementById("consequence1").innerHTML = message;
}

// Adds consequence1 message
function consequence2Page1() {
    // Show outcomes section
    document.getElementById("outcomes-page1").style.display = "block";
    // Hide other consequence text element
    document.getElementById("consequence1").style.display = "none";
    // Add message to p element
    var message;
    message = "This option was the bloodiest. The soldiers are alerted to your presence from the Viking war cry and quickly pick-up arms. You win the short battle but lose three of your men as a result. There is now growing up rest among your men. ";
    document.getElementById("consequence2").innerHTML = message;
}

// Continue Buttons
function continueButtonIndex() {
    window.location.href = "../HTML/page1.html";
}
function continueButtonPage1() {
    window.location.href = "../HTML/page2.html";
}