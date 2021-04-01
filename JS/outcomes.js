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
    sessionStorage.setItem("consequence1", message);
    document.getElementById("consequence1").innerHTML = message;
}
//Adds consequence2 message
function consequence2Index() {
    // Show outcomes section
    document.getElementById("outcomes-index").style.display = "block";
    // Hide other consequence text element
    document.getElementById("consequence1").style.display = "none";
    // Add message to p element
    var message = "Saving the food has caused the crew’s morale to decrease.";
    sessionStorage.setItem("consequence2", message);
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
    var message = "This was the safest option and results in killing all but one soldier who you strike down when entering the camp.";
    messageAlt = "You chose to fire a volley of arrows into the camp before rushing in to kill any remaining Saxon soldiers.";
    sessionStorage.setItem("consequence3", messageAlt)
    document.getElementById("consequence1").innerHTML = message;
}

// Adds consequence1 message
function consequence2Page1() {
    // Show outcomes section
    document.getElementById("outcomes-page1").style.display = "block";
    // Hide other consequence text element
    document.getElementById("consequence1").style.display = "none";
    // Add message to p element
    var message = "This option was the bloodiest. The soldiers are alerted to your presence from the Viking war cry and quickly pick-up arms. You win the short battle but lose three of your men as a result. There is now growing up rest among your men. ";
    messageAlt = "You chose to rush into the camp and take the Saxon soldiers by surprise resulting in the loss of three of your men.";
    sessionStorage.setItem("consequence4", messageAlt)
    document.getElementById("consequence2").innerHTML = message;
}

/*OUTCOMES FOR PAGE 2*/
// Storing all options to be displayed on playthrough stats page
function option1Page2() {
    var message = "You chose to split your men into two groups and launch a sneak attack from two sides of the Fort.";
    sessionStorage.setItem("option1Page2", message);
}
function option2Page2() {
    var message = "You chose to try and sneak into the Fort for a surprise attack against the Saxons.";
    sessionStorage.setItem("option2Page2", message);
}
function option3Page2() {
    var message = "You chose to attempt a head on surprise attack of the Fort, the true Viking way.";
    sessionStorage.setItem("option3Page2", message);
}
// Continue Buttons
function continueButtonIndex() {
    window.location.href = "HTML/page1.html";
}
function continueButtonPage1() {
    window.location.href = "page2.html";
}