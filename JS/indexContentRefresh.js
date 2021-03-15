/* Help Resources Used
*/
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
/*Only used for Index Page
If user wants to go back to the main menu from the name picker content.
*/
function previousContentButton() {
    // Hide Name Picker Content
    document.getElementById("name-picker").style.display = "none";
    // Show Main Menu Content
    document.getElementById("main-menu").style.display = "block";
}