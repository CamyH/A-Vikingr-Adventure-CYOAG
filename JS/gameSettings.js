/*Help Resources Used
https://stackoverflow.com/questions/8832375/how-to-get-selected-value-from-dropdown-list-in-javascript/8832500
https://stackoverflow.com/questions/49820106/add-a-button-using-javascript-to-an-existing-div
https://stackoverflow.com/questions/5410745/how-can-i-get-a-list-of-the-items-stored-in-html-5-local-storage-from-javascript/5410827
*/
// Clear session storage if player returns to index page
if (window.location.href.match("index.html")) {
    window.onload = function restartGame() {
        sessionStorage.clear();
    }
}

// Get chosen name
function getName() {
    // Clear previous name, if there is one
    sessionStorage.clear("playerName");
    let index = document.getElementById("names-list").selectedIndex;
    // Name Variable stores chosen name of character
    let name = document.getElementById("names-list").options[index].text;

    // Session storage to store player's name
    sessionStorage.setItem("playerName", name);
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

function clearScreen() {
    const overlay = document.getElementById("overlay");
    while (overlay.firstChild) {
        overlay.removeChild(overlay.lastChild);
    }
}

function saveCheck() {
    const overlay = document.getElementById("overlay");
    //localStorage.setItem("0", "data1");
    //localStorage.setItem("1", "data2");
    // Guard clause // If no save games found, error message displayed and function does not continue
    if (localStorage.getItem(1) == null) {
        closeLoadGameMenu();
        return alert("No save games found.");
    }
    //alert(localStorage.length);
    alert(overlay.childElementCount);
    // Need to figure out how to stop duplicated buttons when you click load game button each time 
    if (localStorage.length <= 5) {
        for (var i = 0; i < localStorage.length; i++) {
            var breakPoint = document.createElement("br");
            var button = document.createElement("button");
            button.setAttribute("id", "save-game-button" + i);
            button.innerText = localStorage[i];
            overlay.appendChild(button);
            overlay.appendChild(breakPoint);

            //https://stackoverflow.com/questions/49820106/add-a-button-using-javascript-to-an-existing-div
            //https://stackoverflow.com/questions/5410745/how-can-i-get-a-list-of-the-items-stored-in-html-5-local-storage-from-javascript/5410827
        }
    }
    alert(overlay.childElementCount);
}
