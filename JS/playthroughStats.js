/*Help Resources Used

*/

// Playthrough Stats Page
function stats() {
    var message = sessionStorage.getItem("consequence1");
    var div = document.getElementById("stats");
    div.innerHTML += message;
}