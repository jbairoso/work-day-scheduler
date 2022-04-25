let currentDay=$("#currentDay");
currentDay.text(moment().format("dddd,MMMM Do YYYY"));
let timeBlocks=$(".time-block");
let savetextArea={};

//for present past and future tasks
let formatTimeBlocks=function(){
    let currentHour=moment().format();
    let currentHourFound= false;
    for(let i=0; i<timeBlocks.length;[i]){
        if (timeBlocks.eq(i).find(".hour").text()===currentHour){
            timeBlocks.eq(i).find(".event").addClass("present");
            currentHourFound=true;
        }
        else if (currentHourFound){
            timeBlocks.eq(i).find(".event").addClass("future");
        }
        else {
            timeBlocks.eq(i).find(".event").addClass("past");
        }
    }
}

//data will be saved in local storage 
function saveTasksToLocalStorage(){
    for (var i=0; i<=noteBlocks.length; i++){
        if (noteBlocks[i] !==null){

        }
    }
}

let timeBlockNine = document.getElementById('textArea-9');
timeBlockNine.textContent=localStorage.getItem("9");

let timeBlockTen = document.getElementById('textArea-10');
timeBlockTen.textContent=localStorage.getItem("10");

let timeBlockEleven = document.getElementById('textArea-11');
timeBlockEleven.textContent=localStorage.getItem("11");

let timeBlockTwelve = document.getElementById('textArea-12');
timeBlockTwelve.textContent=localStorage.getItem("12");

let timeBlockThirteen = document.getElementById('textArea-13');
timeBlockThirteen.textContent=localStorage.getItem("13");

let timeBlockFourteen = document.getElementById('textArea-14');
timeBlockFourteen.textContent=localStorage.getItem("14");

let timeBlockFifteen = document.getElementById('textArea-15');
timeBlockFifteen.textContent=localStorage.getItem("15");

let timeBlockSixteen = document.getElementById('textArea-16');
timeBlockSixteen.textContent=localStorage.getItem("16");

let timeBlockSeventeen = document.getElementById('textArea-17');
timeBlockSeventeen.textContent=localStorage.getItem("17");

saveTasksToLocalStorage();
