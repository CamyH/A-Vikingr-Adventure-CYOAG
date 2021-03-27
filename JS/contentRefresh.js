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