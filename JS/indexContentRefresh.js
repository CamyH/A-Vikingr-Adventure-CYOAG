/* Resources Used
*/
function hideMainMenu() {
    document.getElementById("main-menu").style.display = "none";
    showNamePicker();
}
function showNamePicker() {
    document.getElementById("name-picker").style.display = "block";;
}
function previousPageButton() {
    // Hide Name Picker Content
    document.getElementById("name-picker").style.display = "none";
    // Show Main Menu Content
    document.getElementById("main-menu").style.display = "block";
}
function creditsPage() {
    window.location.href = "../HTML/credits.html";
}