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
    window.onload = function page3cMessage() {
        var mainStoryParagraph = document.getElementById("page3c-story");
        mainStoryParagraph.textContent += ("The attack goes woefully, as "
            + playerName + " and his men are running up to the front gates, Saxon archers start raining down arrows, picking off man by man. "
            + playerName + ", Egil and the remaining Vikings reach the front gate and realise they have no way of breaking through. "
            + "The Saxon soldiers on the other side of the gate decide to charge through the gate and bring the fight to "
            + playerName + " and his men. A bloody battle ensues, and the Saxons show no mercy. The battle end nears as "
            + playerName + " and Egil are surrounded by Saxons with no-where to run. They know the end is near but press on. The Saxons start attacking "
            + playerName + " and Egil with spears, stabbing them both. Wounded, both "
            + playerName + " and Egil continue to fight to no avail. The Saxons seize the opportunity and charge "
            + playerName + " Sven and Egil, killing them once and for all. The battle is over. The Saxons have won. "
            + "What is left of " + playerName + "'s Sven’s mighty band of Danish raiders scarper after seeing what happened to their leaders.");
    }
}

/* PAGE 4 */
if (window.location.href.match("page4.html")) {
    window.onload = function page4Message() {
        var mainStoryParagraph = document.getElementById("page4-story");
        var paragraph = document.getElementById("message");
        mainStoryParagraph.textContent += ("It has been two days since "
            + playerName + " first had his shackles put on his wrists. "
            + playerName + " has endured no food and very little water from the Saxons. He can see Egil in the cell opposite. "
            + "Every day more and more of his men are taken from their cells and never seen again, presumably killed. "
            + playerName + " knows he must escape if he is to live and starts looking around his cell. He can see an old, worn out, rusty nail in the corner of the floor. He picks it up.");
        paragraph.textContent += "What should " + playerName + " use this nail for?";
    }
}

/* PAGE 5 */
if (window.location.href.match("page5.html")) {
    window.onload = function page5Message() {
        var mainStoryParagraph = document.getElementById("page5-story");
        var paragraph = document.getElementById("message");
        mainStoryParagraph.textContent += (playerName + " starts trying to pick the lock on his cell. The guard notices and storms over demanding to know what he is doing."
            + playerName + " shows him the nail and backs up into his cell, goading the guard to enter his cell. The guard grabs his key and opens the cell. "
            + "Now is " + playerName + "'s chance to escape. He waits for the guard to come closer before charging at the guard, knocking him down. "
            + playerName + " knocks the guard out cold with his shackles before finding the guard’s key to free his wrists. "
            + playerName + " looks up and sees his dear friend and right-hand man Egil looking at him through his cell door. He rushes over, fumbling with the keys, before unlocking the door to Egil’s cell. "
            + playerName + " and Egil both look around. You both spot two potential escape routes.");
        paragraph.textContent += "Which escape route should " + playerName + " and Egil take?";
    }
}