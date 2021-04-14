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
}
// Show Page 1 of the story
function showPage1() {
    document.getElementById("page0").style.display = "block";
}

function showPage0Story() {
    var playerName = sessionStorage.getItem("playerName");
    var mainStoryParagraph = document.getElementById("page0-story");
    var paragraph = document.getElementById("message");
    mainStoryParagraph.textContent += (playerName + " looked out over the rising waves of his Longship, nicknamed, “Lucky”, for all the luck it gave "
        + playerName + " and his crew during raids, and set his eyes on England for the first time. "
        + playerName + " announced to his 115 strong crew that they were approaching land and to ready themselves for what they might face. They had set sail from their camp along the Danish coast 5 days ago and were starting to run low on provisions.");
    paragraph.textContent += "What should " + playerName + " do? Should he divide up their remaining food and give it to the crew or save it for later?";
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