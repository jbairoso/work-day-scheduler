var date = newDate();
var currentTime;
var scheduleSection = document.getElementsByClassName;
var saveButton = document.getElementsByClassName ("saveBtn");

currentDay.textContext = moment().format('MM Do YYYY, h:mm a');

let currentHour = moment().hour();



for (let i=0; i<saveButtonElements.length; i++) {
    let button= saveButtonElements[i];
    button.addEventListener ("click", function(e) {
        var clickTextContext = button.parentElement.previousElementSibling.closest(".noteDescription").textContext;
        var timeBlockId= button.parentElement.firstElementChild.getAttribute("id").split("-")[1];
    });
}

function getCurrentTime() {
    currentTime=parseInt(currentHour);
    currentTime=timeNow;
}