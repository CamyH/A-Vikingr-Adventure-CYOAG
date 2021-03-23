/*Help Resources Used
https://stackoverflow.com/questions/8832375/how-to-get-selected-value-from-dropdown-list-in-javascript/8832500
*/
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
