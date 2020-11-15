//Displays current date in Header
$(document).ready(function(){
    today= $("#rightNow");
    clock= moment().hour();

    today.text(moment().format('dddd, LL'));




storedData9 = JSON.parse(localStorage.getItem("txtInput9"));
    if(storedData9 !== null){
        $("#ToDo9").text(storedData9.text);
    }

storedData10 = JSON.parse(localStorage.getItem("txtInput10"));
    if(storedData10 !== null){
        $("#ToDo10").text(storedData10.text);
    }

storedData11 = JSON.parse(localStorage.getItem("txtInput11"));
    if(storedData11 !== null){
        $("#ToDo11").text(storedData11.text);
    }

storedData12 = JSON.parse(localStorage.getItem("txtInput12"));
    if(storedData12 !== null){
        $("#ToDo12").text(storedData12.text);
    }

storedData13 = JSON.parse(localStorage.getItem("txtInput13"));
    if(storedData13 !== null){
        $("#ToDo13").text(storedData13.text);
    }

storedData14 = JSON.parse(localStorage.getItem("txtInput14"));
    if(storedData14 !== null){
        $("#ToDo14").text(storedData14.text);
    }

storedData15 = JSON.parse(localStorage.getItem("txtInput15"));
    if(storedData15 !== null){
        $("#ToDo15").text(storedData15.text);
    }

storedData16 = JSON.parse(localStorage.getItem("txtInput16"));
    if(storedData16 !== null){
        $("#ToDo16").text(storedData16.text);
    }

storedData17 = JSON.parse(localStorage.getItem("txtInput17"));
    if(storedData17 !== null){
        $("#ToDo17").text(storedData17.text);
    }

function ebenezer() {
    if(9 < clock) {
        $("#ToDo9").addClass("past")
    }
    if (9 == clock) {
        $("#ToDo9").addClass("present")
    }
    if (9 > clock) {
        $("#ToDo9").addClass("future")
    }

    if(10 < clock) {
        $("#ToDo10").addClass("past")
    }
    if (10 == clock) {
        $("#ToDo10").addClass("present")
    }
    if (10 > clock) {
        $("#ToDo10").addClass("future")
    }

    if(11 < clock) {
        $("#ToDo11").addClass("past")
    }
    if (11 == clock) {
        $("#ToDo11").addClass("present")
    }
    if (11 > clock) {
        $("#ToDo11").addClass("future")
    }

    if(12 < clock) {
        $("#ToDo12").addClass("past")
    }
    if (12 == clock) {
        $("#ToDo12").addClass("present")
    }
    if (12 > clock) {
        $("#ToDo12").addClass("future")
    }

    if(13 < clock) {
        $("#ToDo13").addClass("past")
    }
    if (13 == clock) {
        $("#ToDo13").addClass("present")
    }
    if (13 > clock) {
        $("#ToDo13").addClass("future")
    }

    if(14 < clock) {
        $("#ToDo14").addClass("past")
    }
    if (14 == clock) {
        $("#ToDo14").addClass("present")
    }
    if (14 > clock) {
        $("#ToDo14").addClass("future")
    }

    if(15 < clock) {
        $("#ToDo15").addClass("past")
    }
    if (15 == clock) {
        $("#ToDo15").addClass("present")
    }
    if (15 > clock) {
        $("#ToDo15").addClass("future")
    }

    if(16 < clock) {
        $("#ToDo16").addClass("past")
    }
    if (16 == clock) {
        $("#ToDo16").addClass("present")
    }
    if (16 > clock) {
        $("#ToDo16").addClass("future")
    }

    if(17 < clock) {
        $("#ToDo17").addClass("past")
    }
    if (17 == clock) {
        $("#ToDo17").addClass("present")
    }
    if (17 > clock) {
        $("#ToDo17").addClass("future")
    }
    
}

ebenezer();





});

    



    


