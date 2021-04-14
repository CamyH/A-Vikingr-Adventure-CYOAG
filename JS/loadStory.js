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
        var mainStoryParagraph = document.getElementById("page2-story");
        var paragraph = document.getElementById("message");
        mainStoryParagraph.textContent += ("After looting the encampment, "
            + playerName + " finds several letters which informs you that you have landed in the county of Essex and nearby there is a Fort. "
            + "After a quick discussion with your men, you decide that your best course of action is to take this Fort for yourselves to setup a base of operations inside England and take all the hidden riches. "
            + "After walking for what felt like miles "
            + playerName + " and his men set their eyes on their next prize. The Fort of Essex as they called it.");
        paragraph.textContent += playerName + " talks with his men, they collectively decide to attack this fort, some more wearily than others. How should you conquer this fort?";
    }
}

/* PAGE 3a */
if (window.location.href.match("page3a.html")) {
    window.onload = function page3aMessage() {
        var mainStoryParagraph = document.getElementById("page3a-story");
        var paragraph = document.getElementById("message");
        mainStoryParagraph.textContent += ("The attack goes well. Sven’s tactics and leadership shine through the battle as you and your men surprise the Saxons and, even though you suffer heavy loses, the Saxons are fearful of your Viking war cries and valiant fighting and lay down their arms. "
            + playerName + " orders Egil to  round up any remaining Saxons and imprison them, before looting any wealth and food. While your men follow your orders, you climb to the top of the tower and look down upon your new settlement with great excitement as you think of the many great things that are to come."
            + "As " + playerName + " is admiring his newly conquered fort, one of his men approaches from behind asking what they should do with the Saxon prisoners.");
        paragraph.textContent += "What should " + playerName + " do?";
    }
}

/* PAGE 3b */
if (window.location.href.match("page3b.html")) {
    window.onload = function page3bMessage() {
        var mainStoryParagraph = document.getElementById("page3b-story");
        var paragraph = document.getElementById("message");
        mainStoryParagraph.textContent += ("The attack does not quite go to plan, as you sneak into the fort you get spotted by a guard who sounds the alarm. "
            + "Despite this set back, you launch your attack and fight bravely but quickly realise just how outnumbered you are.");
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