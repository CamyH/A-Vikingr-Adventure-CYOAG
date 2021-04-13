/* Help Resources Used 
*/

// PlayerName Global Variable
var playerName = sessionStorage.getItem("playerName");

/* PAGE 1 */
if (window.location.href.match("page1.html")) {
    window.onload = function page1Message() {
        var paragraph = document.getElementById("message");
        paragraph.textContent += playerName + " decides that we will attack these soldiers and find out who they are and where in England they have landed. How should you attack this camp?";
    }
}

/* PAGE 2 */
if (window.location.href.match("page2.html")) {
    window.onload = function page2Message() {
        var paragraph = document.getElementById("message");
        paragraph.textContent += playerName + " talks with his men, they collectively decide to attack this fort, some more wearily than others. How should you conquer this fort?";
    }
}

/* PAGE 3a */
if (window.location.href.match("page3a.html")) {
    window.onload = function page3aMessage() {
        var paragraph = document.getElementById("message");
        paragraph.textContent += "What should " + playerName + " do?";
    }
}

/* PAGE 3b */
if (window.location.href.match("page3b.html")) {
    window.onload = function page3bMessage() {
        var paragraph = document.getElementById("message");
        paragraph.textContent += "What should " + playerName + " do? Should he continue the fight or concede defeat?";
    }
}

/* PAGE 3c */
if (window.location.href.match("page3c.html")) {
    window.onload = function page3cMessage() { }
}

/* PAGE 4 */
if (window.location.href.match("page4.html")) {
    window.onload = function page4Message() {
        var paragraph = document.getElementById("message");
        paragraph.textContent += "What should " + playerName + " use this nail for?";
    }
}

/* PAGE 5 */
if (window.location.href.match("page5.html")) {
    window.onload = function page5Message() {
        var paragraph = document.getElementById("message");
        paragraph.textContent += playerName + " and Egil both look around. You both spot two potential escape routes.";
    }
}