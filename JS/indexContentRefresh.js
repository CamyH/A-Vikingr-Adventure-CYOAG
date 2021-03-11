/* Resources Used
*/
function hideMainMenu() {
    document.getElementById("main-menu").style.display = "none";
    showNamePicker();
}
function showNamePicker() {
    document.getElementById("name-picker").style.display = "block";;
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