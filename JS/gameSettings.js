/*Help Resources Used
https://stackoverflow.com/questions/8832375/how-to-get-selected-value-from-dropdown-list-in-javascript/8832500
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
    sessionStorage.setItem("playerName", name);
}