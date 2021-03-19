/*OUTCOMES FROM PAGE0*/

var divideFoodChoice = true;
console.log(divideFoodChoice);
divideFoodChoice = false;
console.log(divideFoodChoice);

function test1() {
    window.location.href = "../HTML/page1.html";
}

function test2() {
    window.location.href = "../HTML/page1.html";
    divideFoodChoice = false;
    console.log("SAVE FOR LATER", divideFoodChoice);
}

window.onload = function test(divideFoodChoice) {
    console.log(divideFoodChoice);
    if (divideFoodChoice) {
        var textNode = document.createTextNode("Dividing up the remaining food has given a morale boost to Sven's crew and they will fight better.");
        document.body.appendChild(textNode);
    } else {
        var textNode2 = document.createTextNode("Saving the food has caused the crew’s morale to decrease.");
        document.body.appendChild(textNode2);
    }
}

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