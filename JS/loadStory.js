/* Help Resources Used 
*/

// PlayerName Global Variable
var playerName = sessionStorage.getItem("playerName");

/* PAGE 1 */
if (window.location.href.match("page1.html")) {
    window.onload = function page1Story() {
        var mainStoryParagraph = document.getElementById("page1-story");
        var paragraph = document.getElementById("message");
        mainStoryParagraph.textContent += ("Lucky the longship crashes into the east coast of England as "
            + playerName + " and his Viking warriors rush onto the beach before them. They soon stop and look around, taking in their grey surroundings. In the distance, "
            + playerName + "'s right-hand man and good friend, Egil,  spots a small plume of smoke and, in a loud, husky, voice shouts 'CAMP THERE!' while pointing his finger in the direction of the smoke. "
            + playerName + " orders Egil and his men to follow him as they rush towards the billowing plume of smoke. As they get closer, the sound of men talking and laughing can be heard. "
            + playerName + " orders his men to stop and listen. Egil creeps forward and soon spots a small number of soldiers sitting around a campfire and drinking ale. He retreats to their position and relays the intelligence to " + playerName)
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