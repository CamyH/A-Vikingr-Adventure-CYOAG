/*Help Resources Used
*/

// Playthrough Stats Page
// Load stats on page load
window.onload = function stats() {
    page0Stats();
    page1Stats();
    page2Stats();
    page3aStats();
    page3bStats();
    page4Stats();
    page5Stats();
}

function page0Stats() {
    // Page 0
    var div = document.getElementById("stats");
    var message = sessionStorage.getItem("consequence1");
    if (message != null)
        div.innerHTML += message + "<br>";
    else {
        message = sessionStorage.getItem("consequence2");
        div.innerHTML += message + "<br>";
    }
}

function page1Stats() {
    // Page 1
    var div = document.getElementById("stats");
    var message = sessionStorage.getItem("consequence3");
    if (message != null)
        div.innerHTML += "<br>" + message + "<br>";
    else {
        message = sessionStorage.getItem("consequence4");
        div.innerHTML += "<br>" + message + "<br>";
    }
}

function page2Stats() {
    // Page 2
    var div = document.getElementById("stats");
    var message = sessionStorage.getItem("option1Page2");
    if (message != null)
        div.innerHTML += "<br>" + message + "<br>";
    else if (sessionStorage.getItem("option2Page2") != null) {
        message = sessionStorage.getItem("option2Page2")
        div.innerHTML += "<br>" + message + "<br>";
    } else {
        message = sessionStorage.getItem("option3Page2");
        div.innerHTML += "<br>" + message + "<br>";
    }
}

function page3aStats() {
    // Page 3a
    // Guard Clause - do not display stats if player has not picked this option
    if (sessionStorage.getItem("option1Page3a") == null || sessionStorage.getItem("option2Page3a") == null || sessionStorage.getItem("option3Page3a") == null)
        return;
    var div = document.getElementById("stats");
    var message = sessionStorage.getItem("option1Page3a");
    if (message != null)
        div.innerHTML += "<br>" + message + "<br>";
    else if (message = sessionStorage.getItem("option2Page3a") != null) {
        div.innerHTML += "<br>" + message + "<br>";
    } else {
        message = sessionStorage.getItem("option3Page3a");
        div.innerHTML += "<br>" + message + "<br>";
    }
}

function page3bStats() {
    // Page 3b
    // Guard Clause - do not display stats if player has not picked this option
    if (sessionStorage.getItem("option1Page3b") == null || sessionStorage.getItem("option2Page3b") == null)
        return;
    var div = document.getElementById("stats");
    var message = sessionStorage.getItem("option1Page3b");
    if (message != null)
        div.innerHTML += "<br>" + message + "<br>";
    else {
        message = sessionStorage.getItem("option2Page3b")
        div.innerHTML += "<br>" + message + "<br>";
    }
}

function page4Stats() {
    // Page 4
    // Guard Clause - do not display stats if player has not progressed this far in the story
    if (sessionStorage.getItem("option1Page4") == null || sessionStorage.getItem("option2Page4") == null)
        return;
    var div = document.getElementById("stats");
    var message = sessionStorage.getItem("option1Page4");
    if (message != null)
        div.innerHTML += "<br>" + message + "<br>";
    else {
        message = sessionStorage.getItem("option2Page4");
        div.innerHTML += "<br>" + message + "<br>";
    }
}

function page5Stats() {
    // Page 5
    // Guard Clause - do not display stats if player has not progressed this far in the story
    if (sessionStorage.getItem("option1Page5") == null || sessionStorage.getItem("option2Page5") == null)
        return;
    var div = document.getElementById("stats");
    message = sessionStorage.getItem("option1Page5");
    if (message != null)
        div.innerHTML += "<br>" + message + "<br>";
    else {
        message = sessionStorage.getItem("option2Page5");
        div.innerHTML += "<br>" + message + "<br>";
    }

    message = sessionStorage.getItem("option3Page5");
    if (message != null)
        div.innerHTML += "<br>" + message + "<br>";
    else {
        message = sessionStorage.getItem("option4Page5");
        div.innerHTML += "<br>" + message + "<br>";
    }
}