/*OUTCOMES FROM PAGE0*/
var divideFoodChoice = "true";

// Hides Page 0 Content
function option1() {
    document.getElementById("page0").style.display = "none";
    consequence1();
}

function option2() {
    document.getElementById("page0").style.display = "none";
    consequence2();
}

function consequence1() {
    document.getElementById("outcomes").style.display = "block";
    // Currently not working - message not displayed
    var message;
    message = "Dividing up the remaining food has given a morale boost to Sven's crew and they will fight better.";
    document.getElementById("consequence1").innerHTML = message;
}

function consequence2() {
    document.getElementById("outcomes").style.display = "block";
    // Currently not working - message not displayed
    var message;
    message = "Saving the food has caused the crew’s morale to decrease.";
    document.getElementById("consequence2").innerHTML = message;
}

// Testing Below
/*
var wload = window.onload;

function test1() {
    window.location.href = "../HTML/page1.html";
    var greeting;
    greeting = "Dividing up the remaining food has given a morale boost to Sven's crew and they will fight better.";
    document.getElementById("demo").innerHTML = greeting;
    chooseGreeting("1");
}
function test2() {
    window.location.href = "../HTML/page1.html";
    setTimeout(test3, 1000);

}
function test3() {
    chooseGreeting("2");
    console.log("HEY");
}
function chooseGreeting(response) {
    divideFoodChoice = response;
    console.log(divideFoodChoice);
}

function boolTest() {
    var greeting;
    greeting = "Saving the food has caused the crew’s morale to decrease.";
    document.getElementById("demo").innerHTML = greeting;
}

console.log(divideFoodChoice);
*/

//boolTest();
// window.onload = function test(divideFoodChoice) {
//     console.log(divideFoodChoice);
//     if (divideFoodChoice) {
//         var textNode = document.createTextNode("Dividing up the remaining food has given a morale boost to Sven's crew and they will fight better.");
//         document.body.appendChild(textNode);
//     } else {
//         var textNode2 = document.createTextNode("Saving the food has caused the crew’s morale to decrease.");
//         document.body.appendChild(textNode2);
//     }
// }

// window.onload = function myFunction() {
//     var greeting;
//     if (divideFoodChoice) {
//         greeting = "Dividing up the remaining food has given a morale boost to Sven's crew and they will fight better.";
//     } else {
//         greeting = "Saving the food has caused the crew’s morale to decrease.";
//     }
//     document.getElementById("demo").innerHTML = greeting;
// }

// function divideFood() {
//     // Progress to next page
//     window.location.href = "../HTML/page1.html";
// }
// function saveForLater() {
//     window.location.href = "../HTML/page1.html";
//     divideFoodChoice = false;
// }
// if (divideFoodChoice == true) {
//     window.onload = function divideFoodText() {
//         //document.getElementById("consequence1").style.display = "block";
//         var textNode = document.createTextNode("Dividing up the remaining food has given a morale boost to Sven's crew and they will fight better.");
//         document.body.appendChild(textNode);
//     }
// } else if (divideFoodChoice == false) {
//     window.onload = function saveForLaterText() {
//         var textNode2 = document.createTextNode("Saving the food has caused the crew’s morale to decrease.");
//         document.body.appendChild(textNode2);
//     }
// }



function continueButton() {
    document.getElementById("page1").style.display = "block";
}