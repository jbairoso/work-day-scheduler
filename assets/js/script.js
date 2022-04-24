//today's date and time
var formatDate = moment().format('MM Do YYYY, h:mm a');
$('#currentDay').text(formatDate);
var noteBlock=document.getElementById("taskDescription");




for (let i=0; i<saveButtonElements.length; i++) {
    let button= saveButtonElements[i];
    button.addEventListener ("click", function(e) {
        var clickTextContext = button.parentElement.previousElementSibling.closest(".noteDescription").textContext;
        var timeBlockId= button.parentElement.firstElementChild.getAttribute("id").split("-")[1];
        localStorage.setItem(timeBlockId, clickTextContext);
    });
}

function getCurrentTime() {
    currentTime=parseInt(currentHour);
    currentTime=timeNow;
}

//save button
$(".saveBtn").on("click", function() {
    console.log($(this));
});

for (let i = 0; i< hour.length; i++) {
    if (currentHour===hour[i]){
        document.getElementsByClassName("hour"+[i]).classList.add('present');
    }
}

let timeBlockNine=document.getElementById('textArea-9');
timeBlockNine.textContent = localStorage.getItem("9");

let timeBlockTen=document.getElementById('textArea-10');
timeBlockTen.textContent = localStorage.getItem("10")

let timeBlockEleven=document.getElementById('textArea-11');
timeBlockEleven.textContent = localStorage.getItem("11")

let timeBlockTweleve=document.getElementById('textArea-12');
timeBlockTweleve.textContent = localStorage.getItem("12")

let timeBlockThirtteen=document.getElementById('textArea-13');
timeBlockThirtteen.textContent = localStorage.getItem("13")

let timeBlockFourteen=document.getElementById('textArea-14');
timeBlockFourteen.textContent = localStorage.getItem("14")

let timeBlockFifteen=document.getElementById('textArea-15');
timeBlockFifteen.textContent = localStorage.getItem("15")

let timeBlockSixteen=document.getElementById('textArea-16');
timeBlockSixteen.textContent = localStorage.getItem("16")

let timeBlockSeventeen=getElementById('textArea-17');
timeBlockSeventeen.textContent = localStorage.getItem("17")
