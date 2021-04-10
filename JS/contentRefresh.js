/* Help Resources Used
https://www.w3schools.com/jsref/jsref_concat_string.asp
*/
/* Index Page */
// Hide Main Menu Screen
function hideMainMenu() {
    document.getElementById("main-menu").style.display = "none";
    showNamePicker();
}
// Show Name Picker Screen
function showNamePicker() {
    document.getElementById("name-picker").style.display = "block";
}
// Hide Name Picker Screen
function hideNamePicker() {
    document.getElementById("name-picker").style.display = "none";
    showPage1();
    getName();
}
// Show Page 1 of the story
function showPage1() {
    document.getElementById("page0").style.display = "block";
    showMessage();
}
function resetText() {
    var paragraph = document.getElementById("message");
    paragraph.textContent += "";
}
var playerName = "";
function getNewName() { playerName = sessionStorage.getItem("playerName"); }
function showMessage() {
    // Bug - names are delayed - function is loaded straight away so need to figure out how to delay it, otherwise the name is always one behind.
    var paragraph = document.getElementById("message");
    paragraph.textContent += "What should " + playerName + " do? Should he divide up their remaining food and give it to the crew or save it for later?";
    // var textNode = document.createTextNode();
    // paragraph.appendChild(textNode);
}
/*Only used for Index Page
If user wants to go back to the main menu from the name picker content.
*/
function previousContentButton() {
    // Hide Name Picker Content
    document.getElementById("name-picker").style.display = "none";
    // Show Main Menu Content
    document.getElementById("main-menu").style.display = "block";
}

/* PAGE 4 */
function refreshPage4() {
    document.getElementById("page4").style.display = "none";
    document.getElementById("alternate-choice").style.display = "block";
    loadNewContent();
}
function loadNewContent() {
    //var name = sessionStorage.getItem("playerName");
    // Error just now
    var name = "Sven";
    var text = " tries to pick the lock on his shackles with the nail he found, to no avail. Instead ";
    var text2 = " attracts the attention of the guard with the key ring.";
    var message = name.concat(text).concat(name).concat(text2);
    document.getElementById("page4-alternate").innerHTML = message;
}

/* PAGE 5 */
function page5RefreshOption1() {
    document.getElementById("page5").style.display = "none";
    document.getElementById("page5-option1").style.display = "block";
}
function page5RefreshOption2() {
    document.getElementById("page5").style.display = "none";
    document.getElementById("page5-option2").style.display = "block";
}