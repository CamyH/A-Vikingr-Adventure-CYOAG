/*Help Resources Used

*/

// Playthrough Stats Page
// Load stats on page load
window.onload = function stats() {
    page0Stats();
}

function page0Stats() {
    // Page 0
    var message = sessionStorage.getItem("consequence1");
    var div = document.getElementById("stats");
    if (message != null)
        div.innerHTML += message;
    else {
        message = sessionStorage.getItem("consequence2");
        div.innerHTML += message;
    }
}
