$(document).ready(function(){
    today= $("#rightNow");
    clock= moment().format("H");

    today.text(moment().format('dddd, LL'));


$(".inputBlk").each(thisHour);
 
function thisHour() {
    colorHour = ($(this).attr("hourVal"));
    colorHour = parseInt(colorHour);

    if (colorHour == clock) {
        $(this).addClass("Now");
    }
    else if (colorHour < clock) {
        $(this).addClass("past");
    }
    else {
        $(this).addClass("future");
    }
}

$(".btn").on("click", function(event) {
    event.preventDefault();

    saveHour = event.target.parentElement.children[1].firstElementChild.getAtrribute("hourVal");
    enteredTxt = event.target.parentElement.parentElement.children[1].firstElementChild.value;

    if (enteredTxt != null || undefined) {
        localStorage.setItem(saveHour, enteredTxt);
    };
})


})

    



    


