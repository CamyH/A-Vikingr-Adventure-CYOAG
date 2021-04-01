/*Help Resources Used
https://stackoverflow.com/questions/8832375/how-to-get-selected-value-from-dropdown-list-in-javascript/8832500
https://stackoverflow.com/questions/49820106/add-a-button-using-javascript-to-an-existing-div
https://stackoverflow.com/questions/5410745/how-can-i-get-a-list-of-the-items-stored-in-html-5-local-storage-from-javascript/5410827
*/
// Clear session storage
function restartGame() {
    //https://www.tutorialsteacher.com/codeeditor?cid=js-2
    sessionStorage.clear();
}

// Set initial soldiers
var soliders = 118;
function loseSoldiers() {
    soldiers -= 2;
}

// Get chosen name
function getName() {
    let index = document.getElementById("names-list").selectedIndex;
    // Name Variable stores chosen name of character
    let name = document.getElementById("names-list").options[index].text;

    // Session storage to store player's name
    sessionStorage.setItem("playerName", name);
    //alert(sessionStorage.getItem("playerName"));
}

// Save Games
function loadGame() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("close-button").style.display = "block";
}

function closeLoadGameMenu() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("close-button").style.display = "none";
}

function saveCheck() {
    var overlay = document.getElementById("overlay");
    localStorage.setItem("First Save", "1");
    localStorage.setItem("Second Save", "2");
    // Guard clause // Function will only continue if a save game exists.
    //if (localStorage.getItem([0]) == null) return alert("No save games found.");

    for (var i = 0; i < localStorage.length - 1; i++) {
        var button = document.createElement("button");
        button.innerText = localStorage.getItem;
        overlay.appendChild(button);
        //https://stackoverflow.com/questions/49820106/add-a-button-using-javascript-to-an-existing-div
        //https://stackoverflow.com/questions/5410745/how-can-i-get-a-list-of-the-items-stored-in-html-5-local-storage-from-javascript/5410827
    }
}
