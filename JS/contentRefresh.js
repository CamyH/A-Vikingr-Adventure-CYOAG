/* Help Resources Used
https://www.w3schools.com/jsref/jsref_concat_string.asp
*/
/* Index Page */
function hideMainMenu() {
    document.getElementById("main-menu").style.display = "none";
    showNamePicker();
}
function showNamePicker() {
    document.getElementById("name-picker").style.display = "block";
}
function hideNamePicker() {
    document.getElementById("name-picker").style.display = "none";
    showPage1();
}
function showPage1() {
    document.getElementById("page0").style.display = "block";
}
/*Only used for Index Page
If user wants to go back to the main menu from the name picker content.
*/
function previousContentButton() {
    document.getElementById("name-picker").style.display = "none";
    document.getElementById("main-menu").style.display = "block";
}

/* PAGE 4 */
function refreshPage4() {
    document.getElementById("page4").style.display = "none";
    document.getElementById("alternate-choice").style.display = "block";
    loadAlternateContent();
}
function loadAlternateContent() {
    var playerName = sessionStorage.getItem("playerName");
    var paragraph = document.getElementById("page4-alternate");
    paragraph.textContent += playerName + " tries to pick the lock on his shackles with the nail he found, to no avail. Instead " + playerName + " attracts the attention of the guard with the key ring.";
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