/*Help Resources Used
https://stackoverflow.com/questions/5677799/how-to-append-data-to-div-using-javascript
*/

// Outcomes for Page 1
function outcomesPage1() {
    document.getElementById("page1").style.display = "none";
    document.getElementById("outcome1").style.display = "block";
    var divElement = document.getElementById("outcome1-text");
    var outcome = document.createTextNode("This was the safest option and resulted in killing all but one soldier who Sven strikes down when entering the camp.");
    divElement.appendChild(outcome);
}