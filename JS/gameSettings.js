/*Help Resources Used
https://stackoverflow.com/questions/8832375/how-to-get-selected-value-from-dropdown-list-in-javascript/8832500
*/

// Get chosen name
function getName() {
    var index = document.getElementById("names-list").selectedIndex;
    // Name Variable stores chosen name of character
    let name = document.getElementById("names-list").options[index].text;

    //alert(name);
}
